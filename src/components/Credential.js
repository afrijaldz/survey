import React from 'react'
import Navbar from './Navbar'

class Credential extends React.Component {
  state = {
    email: '',
    nickname: '',
    education: 'sd',
    gender: '',
    privacy: '',
    age: '',
    occupation: 'mahasiswa',
    province: '',
    number: 1,
  }

  handleChange = e => {
    let value = e.target.value

    if (value === 'true') {
      value = true
    }

    if (value === 'false') {
      value = false
    }

    this.setState({
      [e.target.name]: value
    })
  }

  handleBack = e => {
    e.preventDefault()
    this.setState({ number: this.state.number !== 0 ? this.state.number - 1 : this.state.number })
  }
  
  handleNext = e => {
    e.preventDefault()
    this.setState({ number: this.state.number !== 9 ? this.state.number + 1 : this.state.number })
  }

  handleStart = e => {
    e.preventDefault()
    localStorage.setItem('survey:user', JSON.stringify(this.state))
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              {this.state.number === 9 ? (
                <div className="text-center">
                  <h5>
                    Kita mulai pertanyaannya ya
                  </h5>
                  <p>Jawab pertanyaan berikut berdasarkan seberapa sering kamu mengalami situasi tersebut dalam kurun waktu 4 minggu terakhir.</p>
                  <p>Pilih jawaban yang paling menggambarkan diri kamu,</p>
                  <p>karena tidak ada jawaban yang benar dan salah</p>
                  <button onClick={this.handleStart} className="btn btn-primary">Mulai</button>
                </div>
              ) : (
                <form onSubmit={this.handleNext}>
                  {this.state.number === 1 && <div className="form-group">
                    <label>Silakan isi dengan email aktif yang kamu gunakan</label>
                    <input onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="Enter email" />
                  </div>}

                  {this.state.number === 2 && <div className="form-group">
                    <label>Dengan mengisi data diri serta menjawab pertanyaan di bawah ini, saya memahami bahwa data yang saya berikan akan dijaga kerahasiaannya.</label>
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input onChange={this.handleChange} className="form-check-input" type="radio" name="privacy" value="true" />
                          <label className="form-check-label">
                            Setuju
                          </label>
                        </div>
                        <div className="form-check">
                          <input onChange={this.handleChange} className="form-check-input" type="radio" name="privacy" value="false" />
                            <label className="form-check-label">
                              Tidak setuju
                          </label>
                        </div>
                    </div>
                  </div>}

                  {this.state.number === 3 && <div className="form-group">
                    <label>Sebelum itu, silakan isi data diri kamu ya!</label>
                    <input onChange={this.handleChange} type="text" name="nickname" className="form-control" aria-describedby="emailHelp" placeholder="Nama panggilan" />
                  </div>}

                  {this.state.number === 4 && <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" value="male"/>
                        <label className="form-check-label">
                          Laki-laki
                          </label>
                      </div>
                      <div className="form-check">
                        <input onChange={this.handleChange} className="form-check-input" type="radio" name="gender" value="female" />
                        <label className="form-check-label">
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>}

                  {this.state.number === 5 && <div className="form-group">
                    <label>Hanya isi dengan angka</label>
                    <input onChange={this.handleChange} type="number" name="age" className="form-control" aria-describedby="emailHelp" placeholder="Usia" />
                  </div>}

                  {this.state.number === 6 && <div className="form-group">
                    <label>Pekerjaan</label>
                    <select className="form-control" name="occupation" onChange={this.handleChange} defaultValue="mahasiswa">
                      <option value="mahasiswa">mahasiswa</option>
                      <option value="ibu rumah tangga">ibu rumah tangga</option>
                      <option value="freelance">freelance</option>
                      <option value="pns">pns</option>
                    </select>
                  </div>}

                  {this.state.number === 7 && <div className="form-group">
                    <label>Pendidikan Terakhir</label>
                    <select className="form-control" onChange={this.handleChange} name="education" defaultValue="sd">
                      <option value="sd">SD</option>
                      <option value="smp">SMP</option>
                      <option value="sma">SMA</option>
                      <option value="s1">S1</option>
                    </select>
                  </div>}

                  {this.state.number === 8 && <div className="form-group">
                    <label>Provinsi saat ini</label>
                    <input onChange={this.handleChange} type="text" name="province" className="form-control" aria-describedby="emailHelp" placeholder="Provinsi domisili" />
                  </div>}
                  
                  <div className="d-flex justify-content-between">
                    <button onClick={this.handleBack} className="btn btn-default">Kembali</button>
                    <button type="submit" className="btn btn-primary">Lanjutkan</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Credential