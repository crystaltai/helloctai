import React, { Component } from 'react';
import './App.css';

import PhotoFeed from './components/PhotoFeed/PhotoFeed';
import PhotoDetail from './components/PhotoDetail/PhotoDetail';
import About from './components/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: photos,
    };
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.resetVisibility = this.resetVisibility.bind(this);
  }

  resetVisibility(){
    this.state.photos.forEach(function(el) {
      el.visibility = false;
    });
  }

  turnOnVisibility() {
    this.setState({photos: photos});
  }
  
  render() {
    return (
      <div className="App">
        <PhotoDetail photos={this.state.photos} />
        <PhotoFeed 
          photos={this.state.photos}
          turnOnVisibility={this.turnOnVisibility}
          resetVisibility={this.resetVisibility}
        />
        <About />
      </div>
    );
  }
}

// PHOTO FEED DATA ----------------------------

const photos = [{
  category: "Food",
  name: "Jjolmyeon",
  exerpt: "I love Jjolmyeon!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/21kUzaMp6sbBWF8jAQBpqwAUWdLuIzMRcUkGqiFd8uBVT7nnCUeKvTdw_EsE3Veu66AuEc_qwlcCmkbMzjSVX2WaB0TNLDsEXWbb2ETTNGAQ6YFd8NR0vr1v_TV3CE8mQ5FieZR0VA=w3730-h3730",
  image: [
    "https://lh3.googleusercontent.com/4BAaXHjEM0AulUO-3Kz9BK8Hi_2ZSdNVOyuyPWOYKqjJKMgTJmk4N0UG3QkUOcvShgoCpXDW98WPt9FxEU6YC1eOKwuQ-aUeGr9jdhVpgqcK2v_6HI17x-q6fImo9AO0QbBS119aeQ=w4898-h3265",
    "https://lh3.googleusercontent.com/00hpuqyfIKQ7wA7d23hgy0pt3Uv744SyNzxxHkgnhyl8E5lgmekAXjdT86aizmaXkgCqF7LUs8GTzTXivFs2I-4Zwmk9nucLQQkay7Xt6z5vybdYtK_1rk2b-fuuE0cXdvjycxBS9w=w4898-h3265",
    "https://lh3.googleusercontent.com/u8TH-sG1dGMdoT5g8ETXyzetsqL55HsQexdnHOIv1Xx2AIXuXOoU8LzvXOimLtOXGAaTjgMsrRbDjFhVEX2TAJv35L2sDT9EQfyk-y2clbq1710XZR9QP--NpceLhlFAAgXL2uNIyg=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Korean Mini Sausage Bowl",
  exerpt: "I love korean food!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/1PMbxSyV8GkE4EZxm0pH6vkWofxLta5LwrIyuTroA6fgktVKRhMQA2b9vtiKqBcKcATt74VYqKN9AumS77um6TU8kWlFwZ2NH_Acankf_pWjfu4rEmVjHxsNkS9AHuk-h4zZjtz0zA=w3265-h3265",
  image: [
    "https://lh3.googleusercontent.com/Cojm5G_oQCo14nA0LSin53GxSgINjVzfvlqwcfIJSzc8xXOfadQpdDUXpb1Onks6KjJ7KD6JxG5a5M94wOQCAlqAT0y3u-fRi0iRJxI9XdKKZZYsIlqvupW6zziggtnEKqEaGV3qIA=w4898-h3265",
    "https://lh3.googleusercontent.com/xFDpP2B6dyvkvZlBZvyBaNxd2eJl4Q1vGjOCzWSpzrWbu6TsRDQwiHwfa-FN_B9g4s9bH7Gf9FlFiIfoCAcgfSmkwcyp_7eatfOR5OTWpZR1H39aYLnQBXgMGw0fM9Uf5bvMySnu2A=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Tofu Bowl",
  exerpt: "I love tofu!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/TILdTitf7B80uTAEnlSE12TfRxOwI4K_MIQxlcUl_dZExhJDhbYYZB1zR2bQ5eAvEGMohNVYaDhKQ5SSikIq7AddZWVDOHMeiUcncnG4cc2QLiAhJw2KpkSglNIitvgttjFKoTPP7Q=w3264-h3265",
  image: [
    "https://lh3.googleusercontent.com/Kt9m_PCOWhbAuYLnmcdPIa2EDQj34OypPseFljwJS4dyKwsFeypcFrAUgqixx6aKzbA5SXlkDmzB1JR50GuwlXV1M2ubQGv6YiJzNmDuIoBQvggzw1qJ_MLAPb434YTBLLfuPTn_Iw=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Han Bat Sul Lung Tang",
  exerpt: "I love this!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/yfzY6HKNgW3vJzQsciV8fUYC8CA8EN8R0fsH07GnjbB4FgoukXKPU7t69OVQbHw02A6QCcWbKI1oAJ2k-YbjmNpY4O2wbtwvC4wWKOBMeK84cBQ0uggSCDHpLxQhnK-Nl3qi6ZtPnQ=w3840-h3840",
  image: [
    "https://lh3.googleusercontent.com/cKQlWNfvOKhjtFBKgvO9O626qnxH22QNvXTY1P7_epOTjrxe92RMXm2C6Ge023bw7TAh-APyDw2HKJSq-UkTeR2sRi_fy-FSIYwpYBz5KQZeVLbhpNLira__GUaQaxx1jFqRw_AvAg=w4898-h3265",
    "https://lh3.googleusercontent.com/W9PHmbOA2sOoVd6MIaMoqOPipe76XRLOWD8dyTBlEqpk_MdgzCJSa-aksD5lDS4c_P_zolYjpK_EzK339DJe0PN8Z0ayn9W1tnJpmCeN7OxqvM0bCWOEltZUAVfLo7lveYR8mhqMeA=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Veggie Kimchi Fried Rice",
  exerpt: "I love Kimchi!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/WrrkonSCnT15vwH5rgEzIF00tlTcCYlwSSRcNW6YoXXAZ5AG-kfonsNuLQlWVVj9P1URazZOwsmi37zW68mwKyF5nAOpa36pw75BCVtmVLuuCUmZtJEDMTPBfujlvAvhoQls5sVN7w=w3055-h3055",
  image: [
    "https://lh3.googleusercontent.com/8b4c2F3OghURcZ512NLp4IPlHCXkQWIUzjNqRo1Iuoryq3alNSiSOKOteWL5jN72IpIyVTRiiiVTN08CznG-vrvReSR4ePJ_KP20zzIv_z1HgPmSBCaKKUo2xiqECsr3O84x9JRJxA=w4899-h3266",
    "https://lh3.googleusercontent.com/Lny0-iWFNRitXgPX88XPEEsMc55U3Or59jafn0DXqHGzgFe5qeGwOMaRvJLi3Zo0W_XRIxSEA176k1mv8rFmfO9iste3QbiELf0JErgjnvZqJl-zpo4EANowCEtvTAxTZPv8pkqKiw=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Steak & Eggs",
  exerpt: "I love breakfast!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/Ii5NmCzxEg5kQrDojTPANvy9E8OA_JCkl70bw-3GjLr_5LXPT7aCNRnrfzWC5itWJBSO8JLwfTNutsyDFY9bFX23BUzv8A0dq8GAfqtuAwguTcMjtYAUE7qupAmKM5K1no1sbGNV5Q=w3840-h3840",
  image: [
    "https://lh3.googleusercontent.com/K4wr2dvDeKtkHJj12xJefkj-rh7pu6xibk9eLlOpJyTjZ2iUQjKXxvTplxEN8L-fXjbfVbiaxJGI7SmHeBKey3Dnkx-iE95cx20q1Mgj5C8hlJLyMQB59Sn81kYKjiG_fzo5qGahYA=w4899-h3266",
    "https://lh3.googleusercontent.com/QnMF0VrgtkOAw4rJaMTcqRHDu-NbwoiPWjXbmdWTSXSo0e2TdtfXeY5rrE_5u1VfcaBwBzAmVR9NIZe05IS04m7KGyBrJGNnmlnAxHia_C6YPI5f3J2-OneKAM5WMy7uCiCTWnQydg=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Turkey BLT",
  exerpt: "I love breakfast!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/sp3dmzkaZsclOh_2ADOOKdbbSUJMhFOj7ucSn_lLAbNE_LuxluPmDKQcclTfFKHbt9Ye9lp_vdl0YDyV1kMz-n1u1bumfhAXtLCk8haOVEnHLfLioBXEF663DHIpUeT3wcgb6M7dgw=w3817-h3817",
  image: [
    "https://lh3.googleusercontent.com/gyVl31K1e49go3dN1TaPqzBLQMrwdU6Yus21w01-fENQEeogHmYoUKSnT9IFhH7B9bJhNi5iTLRsRv48CM5MoMws6JK_RKPwYCFz48SES-7nJPT9HqyoR0_rm4okZvJCBDEvIMPwCw=w3817-h3817",
    "https://lh3.googleusercontent.com/1PrBzjtY7n-Usrp9n3tdNLppmvf_Sjd2Tam1giH7P7ydBs204ROSjTiNv2fvlqIcQZyu4FImHwL9JNU_wIE6J6F7ZxURSaJX59sZMogXqAH5htO5PQQEA7uy1JMONLp_zF12k5IUtw=w4762-h3175"
  ]
}, {
  category: "Food",
  name: "Poke Bowl",
  exerpt: "I love poke!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/J3A1ibeKwLn57DbClGjbm0-SZkituI-8CZ19xkPeMKCVBttHK79hCGqd7W7V5RDm9aMcn943RUG4j89PLy0RoZiZil_XzRAEHS2jjxE6ZXDtNj1tmKNIOUaU2EHgZvuWTrCpBKF4xw=w3153-h3153",
  image: [
    "https://lh3.googleusercontent.com/IRmdu5VCY7OX8jXjkwx5Tz-wdLbh1Im2NY0ZLIienFL9CWMMPCtR27ahM2hg9-Ay2asuRbXpGNXlQWYVyQD1WmjgxeOV3OSbfbKrXhNk3QzG18fX8cpX34awAifxrQP4j6Lm6Ulsow=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Cast Iron Bibimbap",
  exerpt: "I love breakfast!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/c1vVXdjCiAiMaNhjtMHOtX806LQdn3r70ua6Hdo9e6TNnoRE8qbL_lW_Q7CHV9dB2sIowHEfHTQt1uxENiUuePwY3V0hcZPAn6Qsy16lmvtR4dgfX3VspBDBX79spP-mZhL9LvLmzQ=w3729-h3729",
  image: [
    "https://lh3.googleusercontent.com/orrZlQKc_K3yGhutK02ZmvnRi2DCWKUt4lvOofrep6-_3GNDkniBxXs3OFY5LoWo1ea9_Ll66iGZmSiSmd-U86xHzeYVzXNnqy9B-_BwkiQjezQwjNOo82y53ZKZTgB7jJ75tRwGcQ=w4898-h3265",
    "https://lh3.googleusercontent.com/eTQy68U1ReIH2qglKE2tFlsJd1z3bnmB7NMkN_X7bdinxMoFZ_m_T76_s2RFedJOFgjS041MRwjnKzfb9gI-LkfxCeataH3Ln7aFtL06NJY4xVCqVCnTqRvF5JVWJVFdp1Ss9tMc-Q=w4898-h3265",
    "https://lh3.googleusercontent.com/nm39t_UR7o5pTHdeVZX0t3gTn5T-BxV-M3nq0r5gBckF2NCm0Qg0N2HI2mKV7zwsSUEd5L48WaXIRgiAlGwM0ybvX0PXvuzY3CUeQ8Vj_m-oiAUhYLje3osP2IkKcdNXL3tvIBEYjQ=w4898-h3265",
    "https://lh3.googleusercontent.com/CLjV6ujMypeKvqg9iAHca-KYx8B2YuDdZmTaZ0YapqIWow9i6lVD6VB3QUFFZiN2bQF3Vs-oksHxT3uDhmwm3d_uNOCZH-71cu2w_zUgA_iFV1GXLSQ7Fq2UW5PmhltZbF6Oe4CyJQ=w4898-h3265"
  ]
}, {
  category: "Food",
  name: "Mini Toast",
  exerpt: "I love breakfast!",
  visibility: false,
  thumbnail: "https://lh3.googleusercontent.com/CkXVZUxT5iMll_WHokTv0EHGSQZc53KKp5lWU4ALhSfIRoCVbMcjC7flb7b6F0x5z0neLSa6zTgIw9W-7IQKNa0xj6GFnOWOwO_Whfqslrlbj56Dsss2J4tLj_zAkbwbqfqOU4KNaw=w3265-h3265",
  image: [
    "https://lh3.googleusercontent.com/5Qa8sfF-c6dYp16fGlkGRy4eMyN0RugAKsVVBz6Y3eG9ty281s35CcIzA13X6r56GkRTnT3Tu4osc5b15raDM-iqnOEeTmtqpykq1DgyWy0647zVuQqLKT7LDMrYms3yTLm207uz-A=w4898-h3265",
    "https://lh3.googleusercontent.com/eNozHgFVllvh6Qo8nEf6yLGapuXKr5q5doUTHW2YmlxuUn8wLnsqVwle7Svef-reV51wu2o029dKyJsG-xURQjUcx5E2ZRLZ6UAQn4Shl4sm0t0tRInSP6QmLsxqw03M5GxsoXTa0w=w4899-h3266",
    "https://lh3.googleusercontent.com/1GMe6HwvdlxnuyskoYInYFHE9ShT20NsxKx5qE7yCpcsmf2cXlLohcP2CyhbrFdPVcb81Ok0zcGZ54poCKanExCsSk7pk3iiz7ZiVwoEN-K7vptWZa3g6Fpgx7rTq3_PeIEtWlkUEg=w4898-h3266"
  ]
}];



export default App;

// ---------------------------------------
// NOTES
// ---------------------------------------
// Google photo converter - https://www.publicalbum.org/blog/embedding-google-photos-albums

