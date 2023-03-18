const User = require('../models/User');
const bcrypt = require('bcrypt')


const updateUser = async (req, res) => {
    try {
       if(req.body.password){
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt).toString()
        req.body.password = hash

       } 
      
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});

         return res.status(200).json(updatedUser)
    } catch (error) {
        return res.status(500).json(error.message)
        }

} 

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User successfully deleted')
    } catch (error) {
        res.status(500).json(error)
    }
}


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getAllUser = async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({_id: 1}).limit(1)  : await User.find()   
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getStats = async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: {$month: '$createdAt'}
                }
            },
            {
                $group: {
                    _id: '$month', 
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = { updateUser, deleteUser, getUser, getAllUser, getStats}



// await User.find().sort({_id: -1}).limit(5) 
// : await User.find()