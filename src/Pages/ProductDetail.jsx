import axios from 'axios';
import React from 'react';
import { Button, Input, Label } from 'reactstrap';
import { API_URL } from '../helper';
import { BsCartPlusFill } from "react-icons/bs";


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            qty: 1
        }
    }
    componentDidMount() {
        axios.get(`${API_URL}/product${window.location.search}`)
            .then((res) => {
                this.setState({ data: res.data.dataProduct[0] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        let { data } = this.state;
        return (
            <div style={{ paddingTop: '5%' }}>
                <div className='container'>
                    <div className='row my-2'>
                        <div className='col-6'>
                            <h5 className='clr-blue'>Halaman Produk</h5>
                        </div>
                        <div className='col-6'>
                            <h5 className='clr-orange my-1' style={{ float: 'right' }}>| Produk Detail</h5>
                        </div>
                    </div>
                    <hr/>
                    <div className='row p-4'>
                        <div className='col-6 p-4'>
                            <div>
                                <img src={data.url} width="100%" />
                            </div>
                        </div>
                        <div className='col-6 clr-blue py-4' style={{ paddingLeft: '5%' }}>
                            <h2 className='font-price' style={{ fontWeight: 'bold' }}>{data.nama}</h2>
                            <h4 className='font-price'>Rp. {data.harga}</h4>
                            <p className='text-muted my-4'>{data.deskripsi}</p>
                            <div className='d-flex'>
                                <div>
                                    <h5 className='clr-blue'>Kemasan</h5>
                                    <p className='text-muted '>{data.kemasan}</p>
                                </div>
                                <div style={{ marginLeft: '20%' }}>
                                    <h5 className='clr-blue'>Kategori</h5>
                                    <p className='text-muted'>{data.category}</p>
                                </div>
                            </div>
                            <h5>Kuantitas</h5>
                            <div className='row'>
                                <div className='col-3'>
                                    <Input type="number" defaultValue={this.state.qty} />
                                </div>
                                <div className='col-9'>
                                    <Button className='bt-orange' style={{ width: '100%' }}>Tambahkan Ke Keranjang <BsCartPlusFill className='mx-2' style={{ fontSize: '18px' }}/> </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;