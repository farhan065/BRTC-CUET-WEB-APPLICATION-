const Product = require("../models/Product");
const router=require("express").Router();

//create products
router.post("/",async (req,res)=>{
    console.log(req.body)
    console.log("product route reached")
    const newProduct = new Product(req.body)
    try{
        const savedProduct= await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err);
    }
})
//get all product
router.get("/",async (req,res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
  
})
//get product by id
router.get("/find/:id",async (req,res)=>{
    try{
       console.log(req.params.id)
       const product= await Product.findById(req.params.id);
        
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err)
    }

});
// search product
router.get('/search', async (req, res) => {
    try {
      const { query } = req.query;
  
    
      const filter = {
        $or: [
          { category: { $regex: `^${query}`, $options: 'i' } }, 
          { title: { $regex: `^${query}`, $options: 'i' } }     
        ]
      };
  
      // Fetch products from the database
      const products = await Product.find(filter);
  
      // Respond with matching products
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
module.exports=router;