// //@ts-nocheck
// import { requestHandler } from '../router';
// import { Formatter } from '../services';
// import { User } from '../handlers';
// import { Request, Response, NextFunction } from 'express';
// import { UserMiddleware } from '../middlewares';

// jest.mock('../services');
// jest.mock('../handlers');
// jest.mock('../middlewares');

// describe('requestHandler', () => {
//     beforeEach(() => {
//         (Formatter as jest.Mock).mockClear();
//         (User as jest.Mock).mockClear();
//         (UserMiddleware as jest.Mock).mockClear();
//     });

//     const mockReq = {
//         path: '/',
//         method: 'POST'
//     } as Request;
//     const mockRes = {
//         send: jest.fn()
//     } as Response;
//     const mockNext = jest.fn() as NextFunction;

//     it('should call sendCustomResponse if path is "/"', async () => {
//         (Formatter as jest.Mock).mockImplementation(() => ({
//             sendCustomResponse: jest.fn().mockResolvedValue()
//         }));

//         mockReq.path = '/';
//         await requestHandler.call(undefined, mockReq, mockRes, mockNext);
//         expect((Formatter as jest.Mock).mock.instances[0].sendCustomResponse).toHaveBeenCalledWith(
//             mockRes,
//             418,
//             'path error'
//         );
//     });
// });