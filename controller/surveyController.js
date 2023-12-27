const Survey = require('../model/survey');

module.exports.createSurvey = async(req,res)=>{

    try {
        const{name,email,phone_number,gender, nationality,address, message} = req.body;
        
        if(!name || !email || !phone_number || !gender || !nationality || !address || !message){
            return res.status(200).json({
                message:"Incomplete data",
                data:{}
            });
        }
        const createdSurvey = await Survey.create({
            name,
            email,
            phone_number,
            gender, 
            nationality,
            address, 
            message
        });

        if(!createdSurvey){
            return res.status(200).json({
                message:"Survey not created in database due to some reason",
                data:{}
            });
        }

        return res.status(201).json({
            message:"Survey created successfully",
            data:{createdSurvey}
        });

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            data:{},
            error
        });
    }
}

module.exports.getAllSurveyData = async(req,res)=>{

    try {

        const surveys = await Survey.find({});
        if(!surveys){
            return res.status(200).json({
                message:"Survey not fetched from database due to some reason",
                data:{}
            });
        }

        return res.status(200).json({
            message:"All Surveys",
            data:{surveys}
        });
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            data:{},
            error
        });
    }
}

module.exports.getASurveyData = async (req,res)=>{

    try {
        const {id} = req.params;
        const survey = await Survey.findById(id);
        if(!survey){
            return res.status(200).json({
                message:"No such survey data in database",
                data:{}
            });
        }

        return res.status(200).json({
            message:"servey fetched successfully",
            data:{survey}
        });

    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            data:{},
            error
        });
    }
}