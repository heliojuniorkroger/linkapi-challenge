import * as mongoose from 'mongoose';
import { MONGO_URI } from '../constants';

export default class Mongo {
    public static connect() {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);

        mongoose.connect(MONGO_URI);
    }
}
