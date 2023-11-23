const Joi = require('joi')

const couponSchema = Joi.object({
    code: Joi.string(),
    amount: Joi.string(),
    discount_type: Joi.string(),
    description: Joi.string(),
    id: Joi.string()

})
export default couponSchema