const router=require("express").Router()


const newscontroller=require("../controllers/newscontroller")

router.get("/topnews",newscontroller.news)
router.get("/topheadlines",newscontroller.topHeadlines)
router.post("/search",newscontroller.search)
router.get("/all",newscontroller.all)
router.get("/International",newscontroller.international)
router.get("/Sports",newscontroller.sports)
router.get("/Buisness",newscontroller.buisness)
router.get("/Technology",newscontroller.technology)
router.get("/Popularity",newscontroller.popular)
router.get("/relevance",newscontroller.Relevance)
module.exports=router