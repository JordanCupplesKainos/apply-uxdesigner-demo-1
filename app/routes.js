//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post ('/new/email', (req,res) => {
if (req.query.returnUrl){
res.redirect(req.query.returnUrl)
}
else{
res.redirect("/new/code")
}
})



router.post ('/new/code', (req,res) => {

    res.redirect ('/new/name')
    
    })

    router.post ('/new/name', (req,res) => {
        if (req.query.returnUrl){
            res.redirect(req.query.returnUrl)
            }
            else{
        res.redirect ('/new/experience')
            }
        })

        router.post ('/new/experience', (req,res) => {

         if (req.body.new.yearsOfExperience == "None"){
         res.redirect ('/new/not-eligible')

         }else {
            res.redirect ('/new/expertise')
            }
            
        })

        router.post ('/new/expertise', (req,res) => {
            if (req.query.returnUrl){
                res.redirect(req.query.returnUrl)
                }
                else{


            res.redirect ('/new/skills')
                }
            })


        router.post ('/new/skills', (req,res) => {
            if (req.query.returnUrl){
                res.redirect(req.query.returnUrl)
                }
                else{
            res.redirect ('/new/check')
                }
            })

            router.post ('/new/check', (req,res) => {

                res.redirect ('/new/confirmation')

            })