import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
{/* component */ }
import ApplyDocument from '../../../../components/pages/writePage/write/applyDocument/ApplyDocument';
{/* hook */ }
import useChangeApplyDocumentField from '../../../../hooks/pages/writePage/useChangeApplyDocumentField';
import { stateType } from '../applicant/ApplicantContainer'

{/* actions */ }
import { DocumentSelectField } from '../../../../modules/writeChange/applyDocument/actions'

interface props extends RouteComponentProps {
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DocumentContainer: React.FC<props> = (
  {onChangeFile}
) => {
  const dispatch = useDispatch();
  const {
    fileName,
    etc,
    onChangeDocumentFields,
  } = useChangeApplyDocumentField();

  const { state } = useLocation<stateType>();

  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        const applyDocument = state.template.applyDocument
        dispatch(DocumentSelectField({ applyDocument }))
      }
    }
  }, [])

  return (
    <ApplyDocument
      fileName={fileName}
      etc={etc}
      onChangeDocumentFields={onChangeDocumentFields}
      onChangeFile={onChangeFile}
    />
  )
}

export default withRouter(DocumentContainer);