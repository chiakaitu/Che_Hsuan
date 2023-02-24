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
            <img className="pic1_1" src={process.env.PUBLIC_URL + '/images/photo1.jpg'} />
          </div>
          <div className="margin_top_20"></div>
          <div className="photo_text_box width_90 middle">
            <img src={ process.env.PUBLIC_URL + '/images/pic1_2.png' } />
            <div className="center_text text_align_left line_height">
              有緣的人，
              <p>總是在花好月圓的時候相遇，</p>
              <p>在剛好的時間裡明白應該明白的事，</p>
              <p>不多也不少，不早也不遲，</p>
              <p>才能在剛好的時刻裡說出剛好的話，</p>
              <p>結成剛好的姻緣。</p>
            </div>
            <div className="bottom_right">—— 席慕容</div>
          </div>
          <div className="display_flex pic1_3">
            <img src={ process.env.PUBLIC_URL + '/images/pic1_3.png' } />
          </div>
        </div>
        {/* Page 2 */}
        <div className="page margin_top_45">
          <div className="box display_flex">
            <div className="box_left width_40 ">
              <img className='pic2_1' src={ process.env.PUBLIC_URL + '/images/pic2_1.png' } />
              <img className='photo2' src={ process.env.PUBLIC_URL + '/images/photo2.jpg' } />
            </div>
            <div className="box_right width_60">
              <img src={ process.env.PUBLIC_URL + '/images/photo3.jpg' } />
            </div>
          </div>
          <div className="margin_top_45"></div>
          <div className="display_flex text_align_center">
            <p>小時候，</p>
            <p>總覺得長大離自己好遙遠，</p>
            <p>從沒想過一轉眼，</p>
          </div>
          <div className="margin_top_20"></div>
          <div className="display_flex text_align_center">
            <img className='width_80' src={ process.env.PUBLIC_URL + '/images/pic2_2.png' } alt="" />
          </div>
        </div>
        {/* Page 3 */}
        <div className="page margin_top_45">
          <div className="margin_top_45"></div>
          <div className="box display_flex">
            <div className="box_left width_60">
              <img className='pic3_1' src={ process.env.PUBLIC_URL + '/images/pic3_1.png' } />
              <img className='photo4' src={ process.env.PUBLIC_URL + '/images/photo4.jpg' } />
            </div>
            <div className="text_align_center display_flex width_40">
              <p>我們已成家。</p>
            </div>
          </div>
          <div className="margin_top_45"></div>
          <div className="display_flex flex_row_reverse">
            <img className='width_50' src={ process.env.PUBLIC_URL + '/images/pic3_2.png' } />
          </div>
        </div>
        <div className="page margin_top_45">
          <div className="box display_flex flex_column">
            <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo5.jpg' } />
            <div className="box3_1">
              <div className="width_60 margin_right_3">
                <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo6.jpg' } />
              </div>
              <div className="box3_2">
                <img src={ process.env.PUBLIC_URL + '/images/photo7.jpg' } />
                <div className="photo_text_box text_right">
                  <img src={ process.env.PUBLIC_URL + '/images/pic1_2.png' } />
                  <div className="text3_1">
                    <p>三芝</p>
                    <p>是我們相遇的地方，</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page margin_top_45">
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="display_flex">
            <div className="width_50 margin_right_3">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo8.jpg' } />
            </div>
            <div className="box4_1 width_50">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo9.jpg' } />
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo10.jpg' } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
