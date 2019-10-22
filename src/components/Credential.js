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
  }
  
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Silakan isi dengan email aktif yang kamu gunakan</label>
                  <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label>Dengan mengisi data diri serta menjawab pertanyaan di bawah ini, saya memahami bahwa data yang saya berikan akan dijaga kerahasiaannya.</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                        <label className="form-check-label">
                          Setuju
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                          <label className="form-check-label">
                            Tidak setuju
                        </label>
                      </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Sebelum itu, silakan isi data diri kamu ya!</label>
                  <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Nama panggilan" />
                </div>

                <div className="form-group">
                  <label>Jenis Kelamin</label>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" value="option1" checked />
                      <label className="form-check-label">
                        Laki-laki
                        </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" value="option2" />
                      <label className="form-check-label">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Hanya isi dengan angka</label>
                  <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Usia" />
                </div>

                <div className="form-group">
                  <label>Pekerjaan</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Pendidikan Terakhir</label>
                  <select className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Provinsi saat ini</label>
                  <input type="number" className="form-control" aria-describedby="emailHelp" placeholder="Usia" />
                </div>
                
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-default">Kembali</button>
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