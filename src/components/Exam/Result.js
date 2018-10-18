import React from 'react';
import { Table } from 'reactstrap';
import { BeatLoader } from 'react-spinners';
import titleSetter from '../../helpers/titleSetter';
import apiUser from '../../api/user';

export default class ExamResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  async componentDidMount() {
    titleSetter('Exam Result');
    const { match: { params: { id } } } = this.props;
    const { data } = await apiUser.getExamResult(id);
    this.setState({ data, loading: false });
  }

  render() {
    const { data, loading } = this.state;
    const headerKeys = Object.keys((data[0] || {}));
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
            <Table striped bordered>
              <thead>
                <tr>
                  {headerKeys.map(key => <th key={key}>{key}</th>)}
                </tr>
              </thead>
              <tbody>
                {
                    data.map((elem) => {
                      console.log(elem);
                      return (
                        <tr key={elem.id}>
                          {headerKeys.map(key => <th key={key}>{elem[key]}</th>) }
                        </tr>
                      );
                    })
                }
              </tbody>
            </Table>
            )
    }
        </>
    );
  }
}
