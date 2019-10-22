import React from 'react'
import Navbar from './components/Navbar'
import Credential from './components/Credential'

class App extends React.Component {
  state = {
    start: false,
    questions: [
      {
        id: 1,
        question: '1. Dalam 4 minggu terakhir, seberapa sering kamu tiba-tiba merasa lelah?',
      },
      {
        id: 2,
        question: '2. Dalam 4 minggu terakhir, seberapa sering kamu merasa cemas?',
      },
      {
        id: 3,
        question: '3. Dalam 4 minggu terakhir, seberapa sering kamu merasa cemas sampai tidak bisa menenangkan diri sendiri meskipun ada bantuan?',
      },
      {
        id: 4,
        question: '4. Dalam 4 minggu terakhir, seberapa sering kamu merasa putus asa?',
      },
      {
        id: 5,
        question: '5. Dalam 4 minggu terakhir, seberapa sering kamu merasa gelisah atau tidak tenang?',
      },
      {
        id: 6,
        question: '6. Dalam 4 minggu terakhir, seberapa sering kamu merasa sangat gelisah sampai kamu tidak bisa tidur dengan tenang?',
      },
      {
        id: 7,
        question: '7. Dalam 4 minggu terakhir, seberapa sering kamu merasa depresi/sedih yang mendalam?',
      },
      {
        id: 8,
        question: '8. Dalam 4 minggu terakhir, seberapa sering kamu merasa sulit melakukan sesuatu yang biasanya mudah dilakukan?',
      },
      {
        id: 9,
        question: '9. Dalam 4 minggu terakhir, seberapa sering kamu merasa sangat sedih sampai tidak ada yang dapat membuat kamu terhibur?',
      },
      {
        id: 10,
        question: '10. Dalam 4 minggu terakhir, seberapa sering kamu merasa tidak berharga?',
      },
      {
        id: 11,
        question: '11. Dalam 4 minggu terakhir, seberapa sering kamu merasa tidak mampu menangani masalahmu sendiri?',
      },
    ],
    score: 0,
    currentId: 1,
    showResult: false,
    danger: false,
    user: null,
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    const user = JSON.parse(localStorage.getItem('survey:user'))
    console.log(user)
    if (user) {
      this.setState({
        user
      })
    }
  }
  
  handleSubmit = e => {
    e.preventDefault()

    if (e.target.value.value === "") {
      this.setState({
        danger: true,
      })
    } else {
      if (this.state.currentId < 11) {
        this.setState({
          currentId: this.state.currentId + 1, //(this.state.currentId === 11 ? 0 : 1),
          score: this.state.score + Number(e.target.value.value),
          danger: false,
        })
      } else {
        this.setState({
          score: this.state.score + Number(e.target.value.value),
          showResult: true,
          danger: false,
        })
      }
    }
    e.target.reset()
  }

  getResult = () => {
    const score = Number((this.state.score / 55) * 100)
    
    if (score <= 30) {
      return "Kamu baik - baik saja dan kesehatan mentalmu tidak bermasalah."
    }

    if (score > 30 && score <= 60) {
      return "kamu sedang ada tanda - tanda masalah psikologis"
    }

    if (score > 60 && score <= 100) {
      return "kamu memiliki gejala masalah psikologis yang berat"
    }
    
  }

  render () {
    console.log(this.state)
    return (
      <>
        <Navbar />
        {this.state.start ? (
          <>
          {this.state.user ? (
              <>
                {this.state.danger && <div className="alert alert-danger" role="alert">
                  Masukkan nilai kesehatanmu
                </div>}

                {this.state.start && <div className="progress m-4" style={{ height: '25px' }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${(this.state.currentId / 11) * 100}%` }}>{((this.state.currentId / 11) * 100).toFixed(0)} %</div>
                </div>}

                <div className="container mt-4">

                  {!this.state.showResult &&
                    <div className="card" style={{ width: '100%' }}>
                      <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                          <h5 className="card-title">
                            {this.state.questions.filter(question => question.id === this.state.currentId)[0].question}
                          </h5>
                          <div className="m-3 text-center">
                            <input type="radio" className="mx-3" name="value" value={1}></input>
                            <input type="radio" className="mx-3" name="value" value={2}></input>
                            <input type="radio" className="mx-3" name="value" value={3}></input>
                            <input type="radio" className="mx-3" name="value" value={4}></input>
                            <input type="radio" className="mx-3" name="value" value={5}></input>
                            <div className="d-flex justify-content-between">
                              <div>Tidak Pernah</div>
                              <div>Sering</div>
                            </div>
                          </div>
                          <div className="text-center">
                            <button className="btn btn-primary">Selanjutnya</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  }

                  {this.state.showResult && <div className="card" style={{ width: '100%' }}>
                    <div className="card-body text-center">
                      <h5 className="card-title">Skor kesehatan mental kamu adalah {this.state.score}</h5>
                      <p className="card-text">{this.getResult()}</p>
                    </div>
                  </div>}

                </div>
              </>
            ) : (<Credential handler={this.getUser} />)
          }
          </>
        ) : (
          <div className="jumbotron">
            <h1 className="display-4 text-center">Yuk Cek Kondisi Kesehatan Mentalmu!</h1>
            <hr className="my-4" />
            <p className="lead text-center">
              <button className="btn btn-primary btn-lg" onClick={() => this.setState({ start: true })}>Mulai <i className="fa fa-arrow-right"></i></button>
            </p>
          </div>
        )}
      </>
    )
  }
}

export default App;
