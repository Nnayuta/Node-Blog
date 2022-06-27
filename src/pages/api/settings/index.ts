import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { SettingsModel } from "../../../models/SettingsModel";
import SettingsSchema from "../../../schema/SettingsSchema";
import { MongoDB } from "../../../utils/MongoDB";

const SettingsRouter = async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
        case 'GET':
            try {
                await MongoDB.connect()
                const settings = await SettingsSchema.find();
                await MongoDB.disconnect()

                if (!settings) {
                    throw new Error('?')
                }

                return res.status(StatusCodes.OK).json(settings[0])

            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
        case 'PUT':
            try {
                await MongoDB.connect()
                const updateSettings = await SettingsSchema.findByIdAndUpdate("62b7f3612e00da0451284942", req.body, { new: true })
                await MongoDB.disconnect()

                return res.status(StatusCodes.OK).json({
                    message: 'Settings Updated!',
                    NewSettings: updateSettings
                })
            } catch (error) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    message: error.message
                })
            }
        default:
            return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
                message: 'Method not allowed'
            });
    }

}

export default SettingsRouter;