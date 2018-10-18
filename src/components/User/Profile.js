import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import { BeatLoader } from 'react-spinners';

import apiUser from '../../api/user';
import titleSetter from '../../helpers/titleSetter';

class Profile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
    };
  }

  async componentDidMount() {
    titleSetter('Profile');
    const { match: { params: { id } } } = this.props;
    try {
      const { data } = await apiUser.getProfile(id);
      this.setState({ data, loading: false });
    } catch (e) {
      // TODO: handle error
      console.error(e);
    }
  }

  render() {
    const {
      data: {
        first_name, last_name, avatar, id,
      }, loading,
    } = this.state;
    return (

      <>
        {
            loading
            && (
            <BeatLoader
              sizeUnit="px"
              size={150}
              color="#123abc"
              loading={loading}
            />
            )
        }
        {
            !loading
            && (
            <Card>
              <CardImg top width="50%" src={avatar} alt="Profile Pic" />
              <CardBody>
                <CardTitle>{`${first_name} ${last_name}`}</CardTitle>
                <CardSubtitle>{`ID: ${id}`}</CardSubtitle>
              </CardBody>
            </Card>
            )
        }
      </>
    );
  }
}
export default withRouter(Profile);
