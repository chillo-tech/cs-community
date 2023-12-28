import { model } from 'mongoose';
import { suggestSchema } from './suggest.schema';

const Suggest = model('Suggest', suggestSchema);
export default Suggest;

