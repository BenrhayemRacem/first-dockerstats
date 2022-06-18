import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import * as path from "path";
import {ExecException} from "child_process";
const dockerstats = require("dockerstats");
const {exec} = require("child_process")

 class StatsController {

    async getContainers(req:Request,res:Response){
        try{
            const data = await dockerstats.dockerContainers();
             return res.status(StatusCodes.OK).json(data)
        }catch (e) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    async getOneContainerDetails(req:Request,res:Response){
        try{
            const containerId = req.params.id;
            const data = await dockerstats.dockerContainerStats(containerId)
            return res.status(StatusCodes.OK).json(data)
        }catch (e) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)
        }
    }

    async getDockerImages(req:Request,res:Response){
        try{
            const data = await dockerstats.dockerImages();
            return res.status(StatusCodes.OK).json(data)

        }catch (e) {
            console.log(e)
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e)

        }
    }


}

export const statsController = new StatsController()