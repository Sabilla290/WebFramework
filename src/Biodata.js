import React,{Component} from 'react';
import Foto from './img/p2.jpg';
class Biodata extends Component{
	render(){
		return(
			<div>
				<nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top navbar-light" >
				  <div className="container">
				  <a className="navbar-brand" href="#"><b>SINTA AYU SABILLA</b></a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				    <div className="navbar-nav">
				      <a className="nav-item nav-link" href="#About">About <span className="sr-only">(current)</span></a>
				      <a className="nav-item nav-link" href="#Experience">Experience</a>
				      <a className="nav-item nav-link" href="#Education">Education</a>
				      <a className="nav-item nav-link" href="#Skill">Skill</a>
				      <a className="nav-item nav-link" href="#Interest">Interest</a>
				   
				 
				  		 </div>
				  </div>
				  </div>

				</nav>

				<div className="jumbotron jumbotron-fluid  home">
				  <div className="container text-center"><br/><br/><br/>
				  	<img src={Foto} className="rounded-circle" width="250" height="250" alt="Profile"/>
				    <h1 className="display-4 font"><b>Sinta Ayu Sabilla</b></h1>
				    <p className="lead font">Mahasiswa Politeknik Negeri Malang</p>
				  	<br/><br/><br/>
				  </div>
				</div>

				<section id="About">
				<div className="jumbotron-fluid  about ">
				  <div className="container text-center"><br/><br/><br/>
				  		<div className="row">
							<div className="col-12">
								<br/><br/><br/><br/><br/>
								<h1><b>ABOUT</b></h1>
								<br/><br/><br/>
							</div>
						</div>
						<div className="row ">
							<div className="col-6"></div>
							<div className="col-5 text-md-left">
								<p>Anak pertama dengan dua bersaudara yang mempunyai sikap ramah, baik hati dan tidak sombong. :)<br/> Dan sebagai mahasiswa jarang belajar yang hanya ingin segera lulus dan hanya mementingkan gelar.
								</p>
							</div>
							<div className="col-1"></div>
						</div>
						<div className="row ">
							<div className="col-6"></div>
							<div className="col-4">
							<br/><br/>
								<a href="https://www.instagram.com/sabilla290/"><i className="fab fa-instagram fa-3x col-2 icon"></i></a>
								<a href="https://www.github.com/sabilla290/"><i className="fab fa-github fa-3x col-2 icon"></i></a>
								<a href="https://www.twitter.com/sabilla290/"><i className="fab fa-twitter fa-3x col-2 icon"></i></a>
								<a href="https://www.facebbok.com/"><i className="fab fa-facebook fa-3x col-2 icon"></i></a>
							</div>
							<div className="col-2"></div>
						</div>
				  </div>
				</div>
				</section>

				<section id="Experience">
				<div className="jumbotron-fluid experience">
				  <div className="container text-center"><br/><br/><br/>
				  		<div className="row">
							<div className="col-2">
								<br/><br/><br/><br/><br/>
								<h1><b>EXPERIENCE</b></h1>
								<br/><br/><br/>
							</div>
						</div>
						<div className="row ">
							<div className="col-1"></div>
							<div className="col-5 text-md-left">
								<h5><b>CV. Girisa Teknologi - PKL</b></h5>
								<p>Tahun 2016, selama 3 bulan saya pernah prakerin di CV. Girisa pada bagian web developer.
								</p>
								<h5><b>Dinas Kesehatan Kota Batu -  PKL</b></h5>
								<p>Tahun 2020, selama 1 bulan saya pernah prakerin di Dinas Kesehatan Kota Batu pada bagian web developer.
								</p>
							</div>
							<div className="col-6"></div>
						</div>
				  </div>
				</div>
				</section>

				<section id="Education">
				<div className="jumbotron-fluid  education ">
				  <div className="container text-center"><br/><br/><br/>
				  		<div className="row">
							<div className="col-12">
								<br/><br/><br/><br/><br/>
								<h1><b>  EDUCATION</b></h1>
								<br/><br/><br/>
							</div>
						</div>
						<div className="row">
							<div className="col-6"> </div>
							<div className="col-5 text-md-left">
								  <h3 className="mb-0"><b>SMK telkom malang</b></h3>
				                   <span className="text-primary">Juli 2015 - Juli 2017</span>
					              <div className="subheading mb-3"></div>
					              <div>Rekayasa Perangkat Lunak</div>
					              <p>UN: 3.80</p>
							</div>
		         		</div>
		         		<div className="row">
							<div className="col-6"> </div>
							<div className="col-5 text-md-left">
								  <h3 className="mb-0"><b>Politeknik Negeri Malang</b></h3>
				              		<span className="text-primary">September 2015 - Now</span>
					              <div className="subheading mb-3"></div>
					              <div>Sarjana Terapan</div>
					              <p>IPK : ...</p>
							</div>
						</div>
				  </div>
				</div>
				</section>

				<section id="Skill">
				<div className="jumbotron-fluid skill">
				  <div className="container text-center"><br/><br/><br/>
				  		<div className="row">
							<div className="col-2">
								<br/><br/><br/><br/><br/>
								<h1><b>SKILL</b></h1>
								<br/><br/><br/>
							</div>
						</div>
						<div className="row ">
							<div className="col-1"></div>
							<div className="col-5 text-md-left">
								<p>Mempunyai skill yang hanya cukup dari tau pada beberapa bahasa pemrograman yang saya ketahui :
								</p>
								  <i className="fab fa-java fa-4x"></i>
								  <i className="fab fa-php fa-4x"></i>
					              <i className="fab fa-html5 fa-4x"></i>
					              <i className="fab fa-css3-alt fa-4x"></i>
					              <i className="fab fa-js-square fa-4x"></i>
							</div>
							<div className="col-6"></div>
						</div>
				  </div>
				</div>
				</section>
				<section id="Interest">
				<div className="jumbotron-fluid  interest ">
				  <div className="container text-center"><br/><br/><br/>
				  		<div className="row">
							<div className="col-12">
								<br/><br/><br/><br/><br/>
								<h1><b>INTEREST</b></h1>
								<br/><br/><br/>
							</div>
						</div>
						<div className="row ">
							<div className="col-6"></div>
							<div className="col-5 text-md-left">
								<p>Ketertarikan saya saat ini adalah memelihara ikan karena kelak saya ingin menjadi pembudidaya ikan sembari kerja kantoran. :)
								Disamping itu saya juga ingin mempunyai bisnis kuliner karena cocok dengan hobi saya mengunyah makanan.
								</p>
							</div>
							<div className="col-1"></div>
						</div>
				  </div>
				</div>
				</section> 
				
				<footer className="fixed-bottom">Sinta Ayu Sabilla ~ copyright© 2020</footer>

			</div>
		);
	} 
}
export default Biodata;