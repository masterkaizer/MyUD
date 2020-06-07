import React from 'react';
import empData from './data';

class Home extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            empData: [
                {
                    "UserId": "E101",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Steven",
                    "LastName": "Jobs",
                    "FullName": "Steven Jobs",
                    "Region": "NY",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "Jobs@gmail.com"
                },
                {
                    "UserId": "E102",
                    "JobTitleName": "Analyst",
                    "FirstName": "Neil",
                    "LastName": "Amstrong",
                    "FullName": "Neil Amstrong",
                    "Region": "OH",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.a@gmail.com"
                },
                {
                    "UserId": "E103",
                    "JobTitleName": "Designer",
                    "FirstName": "Tom",
                    "LastName": "Hanks",
                    "FullName": "Tom Hanks",
                    "Region": "CA",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "tom.hanks@gmail.com"
                },
                {
                    "UserId": "E104",
                    "JobTitleName": "Analyst",
                    "FirstName": "Steve",
                    "LastName": "Davis",
                    "FullName": "Steve Davis",
                    "Region": "CO",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "steve.davis@gmail.com"
                },
                {
                    "UserId": "E105",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Simon",
                    "LastName": "Gregory",
                    "FullName": "Simon Gregory",
                    "Region": "TN",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "simon.gregory@gmail.com"
                },
                {
                    "UserId": "E106",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Tim",
                    "LastName": "Norman",
                    "FullName": "Tim Norman",
                    "Region": "NJ",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "tim.norman@gmail.com"
                },
                {
                    "UserId": "E107",
                    "JobTitleName": "Designer",
                    "FirstName": "Stacy",
                    "LastName": "Kitson",
                    "FullName": "Stacy Kitson",
                    "Region": "NJ",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "stacy.kitson@gmail.com"
                },
                {
                    "UserId": "E108",
                    "JobTitleName": "Lead",
                    "FirstName": "Steve",
                    "LastName": "Macin",
                    "FullName": "Steve Macin",
                    "Region": "TN",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "steve.macin@gmail.com"
                },
                {
                    "UserId": "E109",
                    "JobTitleName": "Designer",
                    "FirstName": "David",
                    "LastName": "Freeman",
                    "FullName": "David Freeman",
                    "Region": "TN",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "david.freeman@gmail.com"
                },
                {
                    "UserId": "E110",
                    "JobTitleName": "Designer",
                    "FirstName": "Jamie",
                    "LastName": "Owen",
                    "FullName": "Jamie Owen",
                    "Region": "NY",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "jamie.owen@gmail.com"
                },
                {
                    "UserId": "E111",
                    "JobTitleName": "Lead",
                    "FirstName": "Rafael",
                    "LastName": "Sime",
                    "FullName": "Rafael Sime",
                    "Region": "CA",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "rafael.sime@gmail.com"
                },
                {
                    "UserId": "E112",
                    "JobTitleName": "Lead",
                    "FirstName": "Ben",
                    "LastName": "Fork",
                    "FullName": "Ben Fork",
                    "Region": "CO",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "ben.fork@gmail.com"
                },
                {
                    "UserId": "E113",
                    "JobTitleName": "Designer",
                    "FirstName": "Beth",
                    "LastName": "Stevenson",
                    "FullName": "Beth Stevenson",
                    "Region": "OH",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "beth.stevenson@gmail.com"
                },
                {
                    "UserId": "E114",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Yuri",
                    "LastName": "Zirkov",
                    "FullName": "Yuri Zirkov",
                    "Region": "TN",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "yuri.zirkov@gmail.com"
                },
                {
                    "UserId": "E115",
                    "JobTitleName": "Developer",
                    "FirstName": "Andhre",
                    "LastName": "Ash",
                    "FullName": "Andhre Ash",
                    "Region": "NJ",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "andhre.ash@gmail.com"
                },
                {
                    "UserId": "E116",
                    "JobTitleName": "Analyst",
                    "FirstName": "Romin",
                    "LastName": "Irani",
                    "FullName": "Romin Irani",
                    "Region": "CA",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "romin.irani@gmail.com"
                },
                {
                    "UserId": "E117",
                    "JobTitleName": "Developer",
                    "FirstName": "Neil",
                    "LastName": "Irani",
                    "FullName": "Neil Irani",
                    "Region": "NY",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.irani@gmail.com"
                },
                {
                    "UserId": "E118",
                    "JobTitleName": "Analyst",
                    "FirstName": "Cathrene",
                    "LastName": "Xavier",
                    "FullName": "Cathrene Xavier",
                    "Region": "NY",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "cathrene.xavier@gmail.com"
                },
                {
                    "UserId": "E119",
                    "JobTitleName": "Analyst",
                    "FirstName": "Dan",
                    "LastName": "Scott",
                    "FullName": "Dan Scott",
                    "Region": "OH",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "dan.scott@gmail.com"
                },
                {
                    "UserId": "E120",
                    "JobTitleName": "Lead",
                    "FirstName": "Ethan",
                    "LastName": "Curring",
                    "FullName": "Ethan Curring",
                    "Region": "OH",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "ethan.curring@gmail.com"
                },
                {
                    "UserId": "E121",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Amanda",
                    "LastName": "Rudon",
                    "FullName": "Amanda Rudon",
                    "Region": "CO",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "amanda.rudon@gmail.com"
                },
                {
                    "UserId": "E122",
                    "JobTitleName": "Analyst",
                    "FirstName": "Zenith",
                    "LastName": "Savery",
                    "FullName": "Zenith Savery",
                    "Region": "CO",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "zenith.savery@gmail.com"
                },
                {
                    "UserId": "E123",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Yothan",
                    "LastName": "Koth",
                    "FullName": "Yothan Koth",
                    "Region": "NJ",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "yothan.koth@gmail.com"
                },
                {
                    "UserId": "E124",
                    "JobTitleName": "Designer",
                    "FirstName": "Withon",
                    "LastName": "Durty",
                    "FullName": "Withon Durty",
                    "Region": "TN",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "withon.durty@gmail.com"
                },
                {
                    "UserId": "E125",
                    "JobTitleName": "Analyst",
                    "FirstName": "Ponth",
                    "LastName": "Killon",
                    "FullName": "Ponth Killon",
                    "Region": "CO",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "ponth.killon@gmail.com"
                },
                {
                    "UserId": "E126",
                    "JobTitleName": "Lead",
                    "FirstName": "Ergt",
                    "LastName": "Yuer",
                    "FullName": "Ergt Yuer",
                    "Region": "OH",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "ergt.yuer@gmail.com"
                },
                {
                    "UserId": "E127",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Sven",
                    "LastName": "Varth",
                    "FullName": "Sven Varth",
                    "Region": "NY",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "sven.varth@gmail.com"
                },
                {
                    "UserId": "E128",
                    "JobTitleName": "Developer",
                    "FirstName": "David",
                    "LastName": "Moys",
                    "FullName": "David Moys",
                    "Region": "CA",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "david.moys@gmail.com"
                },
                {
                    "UserId": "E129",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Carlos",
                    "LastName": "Mowe",
                    "FullName": "Carlos Mowe",
                    "Region": "TN",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "carlos.mowe@gmail.com"
                },
                {
                    "UserId": "E130",
                    "JobTitleName": "Developer",
                    "FirstName": "Timothy",
                    "LastName": "qwert",
                    "FullName": "Timothy qwert",
                    "Region": "TN",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "timothy.qwert@gmail.com"
                },
                {
                    "UserId": "E131",
                    "JobTitleName": "Lead",
                    "FirstName": "Natasha",
                    "LastName": "Skim",
                    "FullName": "Natasha Skim",
                    "Region": "CA",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "natasha.skim@gmail.com"
                },
                {
                    "UserId": "E132",
                    "JobTitleName": "Designer",
                    "FirstName": "Molly",
                    "LastName": "Dave",
                    "FullName": "Molly Dave",
                    "Region": "NJ",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "molly.dave@gmail.com"
                },
                {
                    "UserId": "E133",
                    "JobTitleName": "Developer",
                    "FirstName": "Kristine",
                    "LastName": "Swrt",
                    "FullName": "Kristine Swrt",
                    "Region": "NY",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "kristine.swrt@gmail.com"
                },
                {
                    "UserId": "E134",
                    "JobTitleName": "Lead",
                    "FirstName": "Romin",
                    "LastName": "Irani",
                    "FullName": "Romin Irani",
                    "Region": "CA",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "romin.irani@gmail.com"
                },
                {
                    "UserId": "E135",
                    "JobTitleName": "Developer",
                    "FirstName": "Neil",
                    "LastName": "Irani",
                    "FullName": "Neil Irani",
                    "Region": "CO",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.irani@gmail.com"
                },
                {
                    "UserId": "E136",
                    "JobTitleName": "Designer",
                    "FirstName": "Tom",
                    "LastName": "Hanks",
                    "FullName": "Tom Hanks",
                    "Region": "NJ",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "tom.hanks@gmail.com"
                },
                {
                    "UserId": "E137",
                    "JobTitleName": "Lead",
                    "FirstName": "Romin",
                    "LastName": "Irani",
                    "FullName": "Romin Irani",
                    "Region": "CO",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "romin.irani@gmail.com"
                },
                {
                    "UserId": "E138",
                    "JobTitleName": "Analyst",
                    "FirstName": "Neil",
                    "LastName": "Irani",
                    "FullName": "Neil Irani",
                    "Region": "NJ",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.irani@gmail.com"
                },
                {
                    "UserId": "E139",
                    "JobTitleName": "Analyst",
                    "FirstName": "Tom",
                    "LastName": "Hanks",
                    "FullName": "Tom Hanks",
                    "Region": "TN",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "tom.hanks@gmail.com"
                },
                {
                    "UserId": "E140",
                    "JobTitleName": "Developer",
                    "FirstName": "Jhon",
                    "LastName": "Given",
                    "FullName": "Jhon Given",
                    "Region": "TN",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "jhon.given@gmail.com"
                },
                {
                    "UserId": "E141",
                    "JobTitleName": "Analyst",
                    "FirstName": "Neil",
                    "LastName": "Irani",
                    "FullName": "Neil Irani",
                    "Region": "TN",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.irani@gmail.com"
                },
                {
                    "UserId": "E142",
                    "JobTitleName": "Designer",
                    "FirstName": "Tom",
                    "LastName": "Hanks",
                    "FullName": "Tom Hanks",
                    "Region": "CO",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "tom.hanks@gmail.com"
                },
                {
                    "UserId": "E143",
                    "JobTitleName": "Analyst",
                    "FirstName": "Romin",
                    "LastName": "Irani",
                    "FullName": "Romin Irani",
                    "Region": "NY",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "romin.irani@gmail.com"
                },
                {
                    "UserId": "E144",
                    "JobTitleName": "Analyst",
                    "FirstName": "Leo",
                    "LastName": "Messy",
                    "FullName": "Leo Messi",
                    "Region": "NJ",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "lm@gmail.com"
                },
                {
                    "UserId": "E145",
                    "JobTitleName": "Developer",
                    "FirstName": "Matt",
                    "LastName": "Dove",
                    "FullName": "Matt Dove",
                    "Region": "TN",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "matt.dove@gmail.com"
                },
                {
                    "UserId": "E146",
                    "JobTitleName": "Analyst",
                    "FirstName": "Ronnie",
                    "LastName": "Butcher",
                    "FullName": "Ronnie Butcher",
                    "Region": "CA",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "ronnie.butcher@gmail.com"
                },
                {
                    "UserId": "E147",
                    "JobTitleName": "Developer",
                    "FirstName": "Neil",
                    "LastName": "Irani",
                    "FullName": "Neil Irani",
                    "Region": "CO",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "neil.irani@gmail.com"
                },
                {
                    "UserId": "E148",
                    "JobTitleName": "Analyst",
                    "FirstName": "Sicon",
                    "LastName": "Zion",
                    "FullName": "Sicon Zion",
                    "Region": "CO",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "sicon.zion@gmail.com"
                },
                {
                    "UserId": "E149",
                    "JobTitleName": "Developer",
                    "FirstName": "Shama",
                    "LastName": "Kove",
                    "FullName": "Shama Kove",
                    "Region": "CO",
                    "PhoneNumber": "408-1234568",
                    "Emailaddress": "shama.kove@gmail.com"
                },
                {
                    "UserId": "E150",
                    "JobTitleName": "Program Directory",
                    "FirstName": "Kevin",
                    "LastName": "Nash",
                    "FullName": "Kevin Nash",
                    "Region": "CO",
                    "PhoneNumber": "408-1111112",
                    "Emailaddress": "kevin.nash@gmail.com"
                },
                {
                    "UserId": "E151",
                    "JobTitleName": "Analyst",
                    "FirstName": "Damin",
                    "LastName": "Cook",
                    "FullName": "Damin Cook",
                    "Region": "OH",
                    "PhoneNumber": "408-2222223",
                    "Emailaddress": "damin.cook@gmail.com"
                }
            ],
            dataToShow: []
        }
    }

    componentDidMount() {
        this.setState({dataToShow : empData})

    }

    sorthandler = ()=>{
        let sorted = this.state.empData.sort(function(a, b) {
            var textA = a.JobTitleName.toUpperCase();
            var textB = b.JobTitleName.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        this.setState({dataToShow : sorted})
    }

    searchHandler = (e) => {
        let { value } = e.target
        let regex = new RegExp(value.toLowerCase());
        let data = [...this.state.empData]
        let filteredData = data.filter(emp => {
            if(emp.FullName.toLowerCase().match(regex)){
                return emp
            }
        })

        this.setState({dataToShow : filteredData})
    }
    render() {
        return (
            <div className="container" style={{ marginTop: '30px' }}>
                <div className="row">
                    <div className="col-8">
                        <button className="btn btn-outline-secondary" onClick={this.sorthandler}>Sort by title</button>
                    </div>
                    <div className="col-4">
                        <div className="form-group">
                            <input type="text" className="form-control pull-right" placeholder="Filter by name" onChange={this.searchHandler}/>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sl No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.dataToShow.map((emp, i) => {
                                return (
                                    <tr>
                                        <th scope="row">{i + 1}</th>
                                        <td>{emp.FullName}</td>
                                        <td>{emp.JobTitleName}</td>
                                        <td>{emp.Emailaddress}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home