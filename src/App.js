import React, { Component } from 'react';
import YoutubeEmbed from './component/YoutubeEmbed';
import SecretPage from './component/SecretPage';

class App extends Component {

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
        {/* Page 4 */}
        <div className="page margin_top_45">
          <div className="box display_flex flex_column">
            <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo5.jpg' } />
            <div className="box3_1">
              <div className="width_60 margin_right_3">
                <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo6.jpg' } />
              </div>
              <div className="box3_2">
                <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo7.jpg' } />
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
        {/* Page 5 */}
        <div className="page margin_top_45 relative overflow_hidden">
          <div className="display_flex width_100 pic5_1">
            <img src={ process.env.PUBLIC_URL + '/images/pic567.png' } />
          </div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="box display_flex">
            <div className="width_50 margin_right_3">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo8.jpg' } />
            </div>
            <div className="box4_1 width_50">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo9.jpg' } />
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo10.jpg' } />
            </div>
          </div>
          <div className="width_100 text5_1">
            <p>一起吃小吃美食，</p>
          </div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="width_100 text5_2">
            <p>走過大街小巷，</p>
          </div>
          <div className="display_flex width_100 pic5_2">
            <img src={ process.env.PUBLIC_URL + '/images/pic567.png' } />
          </div>
          <div className="box display_flex">
            <div className="width_60 margin_right_3">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo11.jpg' } />
            </div>
            <div className="width_40">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo12.jpg' } />
            </div>
          </div>
        </div>
        {/* Page 6 */}
        <div className="page margin_top_45 relative">
          <div className="margin_top_45"></div>
          <div className="box_m display_flex">
            <div className="width_40 display_flex text_align_center_bottom padding_5">
              <p>一起嘻笑打鬧，</p>
            </div>
            <div className="width_60">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo13.jpg' } />
            </div>
          </div>
          <div className="box_m margin_top_minus13">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo14.jpg' } />
          </div>
          <div className="margin_top_30"></div>
          <div className="width_100 text6_1">
            <p>也曾經歷難過與低潮。</p>
          </div>
          <div className="box_m">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo15.jpg' } />
          </div>
          <div className="display_flex width_100 pic6">
            <img src={ process.env.PUBLIC_URL + '/images/pic567.png' } />
          </div>
        </div>
        {/* Page 7 */}
        <div className="page margin_top_45 relative overflow_hidden">
          <div className="margin_top_45"></div>
          <div className="box_s">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo16.jpg' } />
          </div>
          <div className="box display_flex text_align_center">
            <p>慢慢地，</p>
            <p>成了彼此心中的小太陽，</p>
            <p>也學著為對方撐起雨傘。</p>
          </div>
          <div className="box_s">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo17.jpg' } />
          </div>
          <div className="display_flex width_100 pic7_1">
            <img src={ process.env.PUBLIC_URL + '/images/pic567.png' } />
          </div>
          <div className="display_flex width_100 pic7_2">
            <img src={ process.env.PUBLIC_URL + '/images/pic567.png' } />
          </div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
        </div>
        {/* Page 8 */}
        <div className="page margin_top_45">
          <div className="box display_flex text_align_center">
            <p>一起走過的這些日子，</p>
            <p>讓我們決定，</p>
            <p>成為彼此的家人。</p>
          </div>
          <div className="box_m margin_top_minus5">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo18.jpg' } />
          </div>
        </div>
        {/* Page 9 */}
        <div className="page margin_top_45">
          <div className="margin_top_45"></div>
          <div className="box_s">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo19.jpg' } />
          </div>
          <div className="box_s margin_top_20">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo20.jpg' } />
          </div>
          <div className="box_s margin_top_20">
              <img className='width_100 z_1' src={ process.env.PUBLIC_URL + '/images/photo21.jpg' } />
          </div>
        </div>
        {/* Page 10 */}
        <div className="page margin_top_45 relative overflow_hidden">
          <div className="margin_top_45"></div>
          <div className="box display_flex text_align_center">
            <p>謝謝大家，</p>
            <p>陪伴我們經歷各個成長階段，</p>
            <p>想邀請你們，</p>
            <p>與我們一起回顧：</p>
          </div>
          <div className="display_flex width_100 pic10_1_1">
            <img src={ process.env.PUBLIC_URL + '/images/pic10_1.png' } />
          </div>
          <div className="display_flex width_100 pic10_1_2">
            <img src={ process.env.PUBLIC_URL + '/images/pic10_1.png' } />
          </div>
          <YoutubeEmbed embedId="TbhgQXTPGB8" />
          <div className="margin_top_45"></div>
          <div className="box display_flex text_align_center">
            <p>甜蜜的愛情，</p>
            <p>溫暖的親情，</p>
            <p>真摯的友情，</p>
            <p>當我擁有這三種感情，</p>
            <p>我已是這世界上最幸福的人。</p>
          </div>
          <div className="display_flex width_100 pic10_1_3">
            <img src={ process.env.PUBLIC_URL + '/images/pic10_1.png' } />
          </div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
          <div className="margin_top_45"></div>
        </div>
        {/* Page 11 */}
        <div className="page">
          <div className="box width_100 display_flex">
            <div className="width_50 margin_right_3">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo22.jpg' } />
            </div>
            <div className="width_50">
              <img className='width_100' src={ process.env.PUBLIC_URL + '/images/photo23.jpg' } />
            </div>
          </div>
          <div className="box margin_top_20 relative">
            <div className="photo_text_box width_70 margin_auto">
              <img src={ process.env.PUBLIC_URL + '/images/pic11_2.png' } />
              <div className="center_text">
                <p>未來的日子，</p>
                <p>願我們不論遇到什麼</p>
                <p>都能攜手共度，</p>
                <p>並保有笑容及純真。</p>
                <br /><br />
                <p>往後也將以夫妻的身份，</p>
                <p>請大家多多指教
                  <span onClick={ this.submitHandler }>：）</span>
                </p>
              </div>
            </div>
            <div className="display_flex width_100 pic11_1">
              <img src={ process.env.PUBLIC_URL + '/images/pic11_1.png' } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
