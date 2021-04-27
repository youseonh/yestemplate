import React from 'react';
import { withRouter } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
{/* container를 불러와야 component를 가져올 수 있음 */ }
import ApplicantContainer from '../../../../containers/pages/writePage/applicant/ApplicantContainer';
import ApplyDocumentContainer from '../../../../containers/pages/writePage/applyDocument/ApplyDocumentContainer';
import ApplyInfoContainer from '../../../../containers/pages/writePage/applyInfo/ApplyInfoContainer';
import { ITemplate } from '../../../../api/mypage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    }
  }));

  const Write: React.FC = () => {
    return (
      <Paper>
        <ApplicantContainer />
        <ApplyInfoContainer />
        <ApplyDocumentContainer />
      </Paper>
    )
  }

export default Write;