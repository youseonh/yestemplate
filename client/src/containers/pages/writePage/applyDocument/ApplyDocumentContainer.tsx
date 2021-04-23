import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { withRouter, RouteComponentProps } from 'react-router-dom';
{/* component */ }
import ApplyDocument from '../../../../components/pages/writePage/write/applyDocument/ApplyDocument';
{/* hook */ }
import useChangeApplyDocumentField from '../../../../hooks/pages/writePage/useChangeApplyDocumentField';
interface stateType {
  from: { pathname: string },
  template: {
    id: string,
    title: string,
    userFrom: string,
    applicant: {
      belong: string,
      position: string,
      name: string,
      etc: string
    },
    applyInfo: {
      applyContent: string,
      respondent: {
        resName: string,
        resJumin: string,
        relation: string,
      },
      applyAmount: number,
    },
    applyDocument: {
      fileName: Array<string>
    },
    createdAt: string,
    updatedAt: string,
    __v: number
  }
}

const DocumentContainer: React.FC<RouteComponentProps> = () => {
  const {
    fileName,
    onChangeDocumentFields,
  } = useChangeApplyDocumentField();

  const [init, setInit] = useState({ fileName });

  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.template.applicant) {
        setInit(state.template.applyDocument)
      }
    }
  }, [])
  return (
    <ApplyDocument
      fileName={fileName || init.fileName}
      onChangeDocumentFields={onChangeDocumentFields}
    />
  )
}

export default withRouter(DocumentContainer);