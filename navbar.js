import React from 'react'
const Navbar=() =>{
return(
<div>
<nav
class='navbar navbar-expand-lg 
navbar-dark bg-dark'>
<a
class='navbar-brand'
href='#'>
ShopFly
</a>
<button
class='navbar-toggler'
type='button'
data-toggle='collapse'
data-target='#navbarSupportedContent'
aria-controls='navbarSupportedContent'
aria-expanded='false'
aria-level='Toggle navigation'>
<span
class='navbar-toggler-icon'>
</span>
</button>
<div
class='collapse navbar-collapse'
id='navbarSupportedContent'>
<ul
class='navbar-nav mr-auto'>
<li
class='nav-item active'>
<a
class='nav-link'
href='#'>Home
<span
class='sr-only'>
</span>
</a>
</li>
<li
class='nav-item dropdown'>
<a
class='nav-link dropdown-toogle'
href='#'
id='navbarDropdown'
role='button'
data-toggle='dropdown'
aria-haspopup='true'
aria-expanded='false'>
Dropdown
</a>
<div
class='dropdown-menu'
aria-labelledby='navbar
Dropdown'>
<a
class='dropdown-item'
href='#'>
Action
</a>
<a
class='dropdown-item'
href='#'>
Another
</a>
<div
class='dropdown-divider'>
</div>
<a
class='dropdown-item'
href='#'>
Something
</a>
</div>
</li>
<li
class='nav-item'>
<a
class='nav-link'
href='#'
tabIndex='-1'
aria-disabled='true'>
Login
</a>
</li>
</ul>
<form
class='form-inline my-2 my-lg-0'>
<input
class='form-control mr-sm-2'
type='search'
placeholder='search'
aria-level='search'/>
<button
class='btn btn-outline-sucess 
my-2 my-sm-0'
type='submit'>
Search
</button>
</form>
</div>
</nav>
</div>
)
}
export default Navbar
