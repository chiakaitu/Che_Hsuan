import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {/* Page 1 */}
        <div className="page">
          <div className="box">
            <div className="photo_text_box width_50">
               <img src={ process.env.PUBLIC_URL + '/images/pic1_1.png' } />
              <div className="center_text">With love and thanks</div>
            </div>
            <img className="pic1_1" src={ process.env.PUBLIC_URL + '/images/photo1.jpg' } />
          </div>
          <div className="margin_top_20"></div>
          <div className="photo_text_box width_90 middle">
             <img src={ process.env.PUBLIC_URL + '/images/pic1_2.png' } />
            <div className="center_text text_align_left line_height">
              有緣的人，
              <br />總是在花好月圓的時候相遇，
              <br />在剛好的時間裡明白應該明白的事，
              <br />不多也不少，不早也不遲，
              <br />才能在剛好的時刻裡說出剛好的話，
              <br />結成剛好的姻緣。
            </div>
            <div className="bottom_right">—— 席慕容</div>
          </div>
          <div className="display_flex pic1_3">
             <img src={ process.env.PUBLIC_URL + '/images/pic1_3.png' } />
          </div>
        </div>
        {/* Page 2 */}
        <div className="page">
          123123
        </div>
      </div>
    )
  }
}

export default App;
