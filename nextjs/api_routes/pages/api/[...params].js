// Catch All API Routes
// [...params].js catch all route (but if there is no index.js will be 404 not a params)
// [[...params]].js optional catch all route (will catch every route even if there is no index.js)


export default function handler(req,res){
    const params = req.query.params
    console.log(params)
    res.status(200).json(params)

}