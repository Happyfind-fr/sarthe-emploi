// //@ts-nocheck
// import { NextFunction, Request, Response } from 'express';
// import { requestHandler } from '../router';

// describe('requestHandler', () => {

//     let req: Request;
//     let res: Response;
//     let next: NextFunction;

//     beforeEach(() => {
//         req = {
//             method: 'GET',
//             path: '/user/getAllUsers'
//         };
//         res = {
//             status: jest.fn().mockReturnThis(),
//             statusCode: 418,
//             statusMessage: '',
//             end: jest.fn()
//         };
//         next = jest.fn();
//     });

//     it('should call the controller function for a valid request', () => {
//         req.next = next;
//         requestHandler(req, res, next);
//         expect(next).toHaveBeenCalled();
//     });

//     it('should return a 200 response with an "Internal Server Error" message for an invalid request', () => {
//         req.next = next;
//         req.path = '/invalid/request';
//         requestHandler(req, res, next);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.statusMessage).toEqual('Internal Server Error');
//         expect(res.end).toHaveBeenCalled();
//     });

//     it('should return a 200 response with an "Internal Server Error" message for semi-valid request', () => {
//         req.next = next;
//         req.method = 'GET';
//         req.path = '/Offer/get';
//         requestHandler(req, res, next);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.statusMessage).toEqual('Internal Server Error');
//         expect(res.end).toHaveBeenCalled();
//     });

//     it('should handle invalid request method', () => {
//         req.next = next;
//         req.method = 'INVALID';
//         requestHandler(req, res, next);
//         expect(res.status).toHaveBeenCalledWith(200);
//         expect(res.statusMessage).toEqual('Internal Server Error');
//         expect(res.end).toHaveBeenCalled();
//     });
// });
