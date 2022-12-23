// //@ts-nocheck
// import { requestHandler } from '../router';
// import { Formatter } from '../services';
// import { User } from '../handlers';
// import { Request, Response, NextFunction } from 'express';
// import { UserMiddleware } from '../middlewares';

// jest.mock('../services');
// jest.mock('../handlers');
// jest.mock('../middlewares');
// jest.mock('../router');

// describe('requestHandler', () => {
//     beforeEach(() => {
//         (Formatter as jest.Mock).mockClear();
//         (User as jest.Mock).mockClear();
//         (UserMiddleware as jest.Mock).mockClear();
//         (requestHandler as jest.Mock).mockClear();
//     });

//     const mockReq = {
//         path: '/',
//         method: 'POST'
//     } as Request;
//     const mockRes = {
//         send: jest.fn()
//     } as Response;
//     const mockNext = jest.fn() as NextFunction;
//     const mockRequestHandler = jest.fn() as requestHandler;
//     const sendCustomResponse = jest.fn() as Formatter.sendCustomResponse;

//     it('should call sendCustomResponse if path is "/"', async () => {
//         (Formatter as jest.Mock).mockImplementation(() => ({
//             sendCustomResponse: jest.fn().mockResolvedValue()
//         }));

//         mockReq.path = '/';
//         await mockRequestHandler.call(undefined, mockReq, mockRes, mockNext);
//         expect(sendCustomResponse(mockRes, 418, "erreru")).toHaveBeenCalled();
//     });
// });
describe('sanity check', () => {
    it('should be true', () => {
        expect(true).toBeTruthy();
    })
})