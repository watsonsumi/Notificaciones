import { Error as MongoError } from 'mongoose';

export const errorHandler = (err, req, res, next) => {
    if (err.errors) {
        const errs = err.errors.map((e) => ({ msg: e.msg }));
        return res.status(422).json({
            errors: errs,
        });
    } else if (err.isAxiosError) {
        return res.status(400).json({
            errors: [{ msg: err.response.data.error.message }],
        });
    } else if (err instanceof MongoError) {
        return res.status(500).json({
            errors: [{ msg: err.message }],
        });
    }

    res.status(err.status || 400).json({
        errors: [{ msg: err.message }],
    });
};