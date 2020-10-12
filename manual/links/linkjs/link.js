const facultyList = [
    {
        id: 1,
        name: 'Cemil Kirbas',
        status : 'Completed 1:1',
        address: '7384 Brandshire Ln Dublin, OH 43017',
        cell: '(937)626-1229',
        email: 'ckirbas1@udayton.edu',
        institution: 'Dayton Aug 24',
        zoom: 'DAYHS03 @shorelight.com',
        homestudio: 32,
        locationid: 249,
    },
    {
        id: 2,
        name: 'Ed Mykytka',
        status : 'Completed 1:1',
        address: '4116 Wagner Rd., Dayton, OH 45440-1427',
        cell: '(937)272-2650',
        email: 'emykytka1@udayton.edu',
        institution: 'Dayton Aug 24',
        zoom: 'DAYHS01 @shorelight.com',
        homestudio: 31,
        locationid: 238,
    },
    {
        id: 3,
        name: 'Sandy Furterer',
        status : 'Completed 1:1 (twice)',
        address: '1668 Lago Mar Dayton, OH 45458',
        cell: '(954)-415-9720',
        email: 'sfurterer1@udayton.edu',
        institution: 'Dayton Aug 24',
        zoom: 'DAYHS02 @shorelight.com',
        homestudio: 57,
        locationid: 255,
    },
    {
        id: 4,
        name: 'Tatiana Kostova',
        status : '',
        address: '115 Brassie Court, Columbia SC 29229',
        cell: '(803)-528-1762',
        email: 'kostova@moore.sc.edu',
        institution: 'South Carolina Sep 9',
        zoom: 'USCHS02 @shorelight.com',
        homestudio: '',
        locationid: '',
    },
    {
        id: 5,
        name: 'Sunny Park',
        status : '',
        address: '413 Hawkeye Ct., Columbia, SC 29206',
        cell: '(803)-730-5945',
        email: 'sunny.park@moore.sc.edu',
        institution: 'South Carolina Sep 9',
        zoom: 'USCHS01 @shorelight.com',
        homestudio: '',
        locationid: '',
    },
    {
        id: 6,
        name: 'Brynmor Thomas',
        status : 'Completed 1-1',
        address: '112 Timbergate Dr., Lexington, SC 29073',
        cell: '(251)-401-7730',
        email: 'brynmor@mailbox.sc.edu',
        institution: 'South Carolina Sep 9. <br> Teaching virtual grad Aug 31 as well.',
        zoom: 'USCHS04 @shorelight.com',
        homestudio: 22,
        locationid: 239,
    },
    {
        id: 7,
        name: 'Jackie Woldering',
        status : '',
        address: '8371 Twin Creek Court Mentor, OH 44060-8617',
        cell: '(216)-789-2483',
        email: 'j.woldering@csuohio.edu',
        institution: 'Cleveland State University Aug 22',
        zoom: '',
        homestudio: '',
        locationid: '',
    }

]

// class selectors - buttons
const navBtns = document.querySelectorAll('.link-item')
const content = document.querySelectorAll('.content')
const tfspeech = document.getElementById('speech')
const listTable = document.querySelector('.listed')
const hamBtn = document.querySelector('.hamburger')
const links = document.querySelector('.links')

// function default content as page loads
const onLoad = () =>  tfspeech.classList.add('show-item');
onLoad();

// Event Listner
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const btnTarget = e.target.dataset.id
        content.forEach(c => {
            if(btnTarget === 'home'){
                onLoad()        
            }
            else if(c.id === btnTarget){
                c.classList.add('show-item')
            }
            else{
                c.classList.remove('show-item')
            }
        })
    
    })
})

hamBtn.addEventListener('click', () => {
    links.classList.toggle('show-grid')
})

// function to display faculty list
function displayFaculty(list){
const details = list.map(f => {
    return `<tr>
    <th>${f.id}</th>
      <th>${f.name}</th>
      <th>${f.status}</th>
      <th>${f.address} <br />
      ${f.cell} <br />
      ${f.email}</th>
      <th>${f.institution}</th>
      <th>${f.zoom}</th>
      <th>${f.homestudio}</th>
      <th>${f.locationid}</th>
    </tr>`
    }).join('')

    const title = `<tr><th>Sl. No.</th>
    <th>Name</th>
    <th>Status</th>
    <th>Address</th>
    <th>Institution</th>
    <th>Computer Name/ Zoom Account</th>
    <th>Home Studio No</th>
    <th>Location ID</th>
    </tr>`

    listTable.innerHTML = `${title} ${details}`
}
displayFaculty(facultyList)






