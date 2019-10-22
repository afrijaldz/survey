import React from 'react'
import Navbar from './Navbar'

class Credential extends React.Component {
  state = {
    email: '',
    nickname: '',
    education: '',
    gender: '',
    privacy: '',
    age: '',
    occupation: '',
    province: '',
    number: 1,
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  handleBack = e => {
    e.preventDefault()
    this.setState({ number: this.state.number !== 0 ? this.state.number - 1 : this.state.number })
  }
  
  handleNext = e => {
    e.preventDefault()
    this.setState({ number: this.state.number !== 9 ? this.state.number + 1 : this.state.number })
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={this.handleNext}>
                {this.state.number === 1 && <div className="form-group">
                  <label>Silakan isi dengan email aktif yang kamu gunakan</label>
                  <input onChange={this.handleChange} type="email" className="form-control" placeholder="Enter email" />
                </div>}

                {this.state.number === 2 && <div className="form-group">
                  <label>Dengan mengisi data diri serta menjawab pertanyaan di bawah ini, saya memahami bahwa data yang saya berikan akan dijaga kerahasiaannya.</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input onChange={this.handleChange} className="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                        <label className="form-check-label">
                          Setuju
                        </label>
                      </div>
                      <div className="form-check">
                        <input onChange={this.handleChange} className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                          <label className="form-check-label">
                            Tidak setuju
                        </label>
                      </div>
                  </div>
                </div>}

                {this.state.number === 3 && <div className="form-group">
                  <label>Sebelum itu, silakan isi data diri kamu ya!</label>
                  <input onChange={this.handleChange} type="text" className="form-control" aria-describedby="emailHelp" placeholder="Nama panggilan" />
                </div>}

                {this.state.number === 4 && <div className="form-group">
                  <label>Jenis Kelamin</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input onChange={this.handleChange} className="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                      <label className="form-check-label">
                        Laki-laki
                        </label>
                    </div>
                    <div className="form-check">
                      <input onChange={this.handleChange} className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                      <label className="form-check-label">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>}

                {this.state.number === 5 && <div className="form-group">
                  <label>Hanya isi dengan angka</label>
                  <input onChange={this.handleChange} type="number" className="form-control" aria-describedby="emailHelp" placeholder="Usia" />
                </div>}

                {this.state.number === 6 && <div className="form-group">
                  <label>Pekerjaan</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>}

                {this.state.number === 8 && <div className="form-group">
                  <label>Pendidikan Terakhir</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>}

                {this.state.number === 9 && <div className="form-group">
                  <label>Provinsi saat ini</label>
                  <input onChange={this.handleChange} type="number" className="form-control" aria-describedby="emailHelp" placeholder="Usia" />
                </div>}
                
                <div className="d-flex justify-content-between">
                  <button onClick={this.handleBack} className="btn btn-default">Kembali</button>
                  <button type="submit" className="btn btn-primary">Lanjutkan</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Credential