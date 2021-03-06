
import { useDispatch } from 'react-redux';
import {ApplicantSelectField} from '../../../modules/writeChange/applicant/actions'
import {DocumentSelectField} from '../../../modules/writeChange/applydocument/actions'
import {InfoSelectField} from '../../../modules/writeChange/applyInfo/actions'

function useSelectTemplateField() {
  const dispatch = useDispatch();

  const initRequest = (): void => {
    dispatch(ApplicantSelectField({}))
    dispatch(DocumentSelectField({}))
    dispatch(InfoSelectField({}))
  };

  return {
    initRequest,
  };
}
export default useSelectTemplateField;