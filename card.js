import Logo from './1 .jpg'
const Card = () => {
return (
<div className='parent m-5 row gy-1 gx-1 my-1'>
<div class='col-md-3'>
<div class='card row' style={{width: '18rem'}}>
<img class='card-img-top' src={logo} alt='card image cap' />
<div class='card-body'>
<h5 class='card-title'> $1.60</h5>
<p class='card-text'>Wrapped durex</p>
<a href='#' class='btn btn-primary'> Purchase</a>
</div>
</div>
</div>
<div class='col-md-3 my-2'>
<div class='card row' style={{width:'18rem'}}>
<img class='card-img-top' src={logo} alt='card image cap'/>
<div class='card-body'>
<h5 class='card-title'> $1.60</h5>
<p class='card-text'>Wrapped Durex</p>
<a href='#' class='btn btn-primary'> Purchase</a>
</div>
</div>
</div>
<div class='col-md-3 my-2'>
<div class='card row' style={{width:'18rem'}}>
<img class='card-img-top' src={logo} alt='card image cap'/>
<div class='card-body'>
<h5 class='card-title'> $1.60</h5>
<p class='card-text'>Wrapped Durex</p>
<a href='#' class='btn btn-primary'> Purchase</a>
</div>
</div>
</div>
<div class='col-md-3 my-2'>
<div class='card row' style={{width:'18rem'}}>
<img class='card-img-top' src={logo} alt='card image cap'/>
<div class='card-body'>
<h5 class='card-title'> $1.60</h5>
<p class='card-text'>Wrapped Durex</p>
<a href='#' class='btn btn-primary'> Purchase</a>
</div>
</div>
</div>
<div class='col-md-3 my-2'>
<div class='card row' style={{width:'18rem'}}>
<img class='card-img-top' src={logo} alt='card image cap'/>
<div class='card-body'>
<h5 class='card-title'> $1.60</h5>
<p class='card-text'>Wrapped Durex</p>
<a href='#' class='btn btn-primary'> Purchase</a>
</div>
</div>
</div>
</div>
)
}
export default Card
