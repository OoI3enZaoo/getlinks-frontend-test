import React from 'react'
import { connect } from 'react-redux'
import { fetchMember } from '<reducers>/memberReducer'
import ShowcaseSection from '<components>/showcaseSection'
import MainSection from '<components>/mainSection'
import MemberListSection from '<components>/memberListSection'
import FooterSection from '<components>/footerSection'

class IndexPage extends React.PureComponent {
  static async getInitialProps ({ store }) {
    await store.dispatch(fetchMember())
  }
  render () {
    return (
      <>
        <ShowcaseSection/>
        <MainSection/>
        <MemberListSection members={this.props.memberReducer.members}/>
        <FooterSection/> 
      </>    
    )
  }
}

export default connect(
  ({ memberReducer }) => ({ memberReducer }),
  { fetchMember }
)(IndexPage)