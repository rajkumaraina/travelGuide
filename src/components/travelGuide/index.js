import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import EachPlace from '../EachPlace'

class TravelGuide extends Component {
  state = {placesList: [], isLoading: true}

  componentDidMount = () => {
    this.getPlaces()
  }

  getPlaces = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
      description: each.description,
    }))
    this.setState({placesList: updatedData, isLoading: false})
  }

  render() {
    const {placesList, isLoading} = this.state
    return (
      <div className="mainContainer">
        <h1 className="travel">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="unordered">
            {placesList.map(each => (
              <EachPlace item={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
