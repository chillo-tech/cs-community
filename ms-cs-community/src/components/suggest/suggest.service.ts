import { SuggestionType } from '../../types/Suggest';
import Suggest from './suggest.model';

const create = async (suggestion: SuggestionType) => {
  try {
    const newSuggestion = await Suggest.create(suggestion);
    return newSuggestion.toJSON();
  } catch (err) {
    console.log('something went wrong went creating a new suggestion', err);
    throw new Error('something went wrong went creating a new suggestion');
  }
};

const suggestService = {
  create,
};

export default suggestService;
