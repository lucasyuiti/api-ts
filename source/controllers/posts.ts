import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface pdfRequest {
    pdfName: string;
    read : string;
    keys: keyValue[]
}

interface keyValue{
    key: string;
    value: string;
}

const URL2PDF = async(req: pdfRequest) => {
    try{
        let name: string = req.pdfName;
        let url: string = req.read;
        let pdf: AxiosResponse = await axios.get(`http://localhost:3000/urlPDF/${url}/${name}`);
        return pdf;
    }
    catch{
        return console.error("Didn't work");
    }
};

const HTML2PDF = async(req: pdfRequest) => {
    try{
        let name: string = req.pdfName;
        let html: string = req.read;
        let pdf: AxiosResponse = await axios.get(`http://localhost:3000/htmlPDF/${html}/${name}`);
        return pdf;
    }
    catch{
        return console.error("Didn't work");   
    }
    
    
}


export default { URL2PDF, HTML2PDF };