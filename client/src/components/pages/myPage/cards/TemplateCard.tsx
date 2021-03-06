import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useHistory } from "react-router";

import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

import { ITemplate } from '../../../../api/mypage';

const useStyles = makeStyles({
  palette: {
    color: '#388e3c',
  },
  root: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    fontSize: 12,
  },
});
interface Props extends RouteComponentProps {
  key: number,
  template: ITemplate
}

function TemplateCardComponent(Props: Props) {
  const history = useHistory();
  const classes = useStyles();
  const template = Props.template

  const onClickToWrite = () => {
    history.push({
      pathname: "/write",
      state: { template: template, isEdit: true }
    })
  };

  return (
    <>
      < Grid item xs={12} sm={6} md={3} >
        {template &&
          < Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                신청인:{template.applicant && template.applicant.name || 'unNamed'}
              </Typography>
              <Typography variant="h5" component="h2">

                {template.applyInfo && //true고
                  template.applyInfo.applyContent ? //true면
                  template.applyInfo.applyContent.length < 7 ?
                    template.applyInfo.applyContent
                    : template.applyInfo.applyContent.slice(0, 7) + ' ...(더보기)'
                  : 'No Content'
                }

              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                작성: {template.createdAt}
                <br />
                수정: {template.updatedAt ? template.updatedAt : '수정사항 없음'}
              </Typography>
              <Divider />
              {/* <Typography variant="body2" component="p">
                {'내용 없음'}
              </Typography> */}
            </CardContent>
          <CardActions>
            <Tooltip title="수정">
              <Button variant="outlined" onClick={onClickToWrite} style={{ marginLeft: '75%', width: '15%' }} className={classes.palette}>
                <EditTwoToneIcon />
              </Button>
            </Tooltip>
            </CardActions>
          </Card>
        }
      </ Grid>
    </ >
  );
}
export default withRouter(TemplateCardComponent);