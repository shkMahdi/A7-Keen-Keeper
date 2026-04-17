import insta from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import x from '../../assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='w-[95%] md:max-w-227.5 mx-auto'>
                <div className='py-5 space-y-6'>
                    <p className='text-2xl md:text-5xl text-white font-extrabold text-center mt-6'>KeenKeeper</p>
                    <p className='text-white text-center text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div className='text-center space-y-2'>
                        <p className='text-xl font-medium text-white'>Social Links</p>
                        <div className='flex gap-4 justify-center'>
                            <a><img src={insta} alt="insta" /></a>
                            <a><img src={facebook} alt="facebook" /></a>
                            <a><img src={x} alt="x" /></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between border-t border-t-gray-300 py-5'>
                    <p className='text-sm text-gray-400'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-5 text-sm text-gray-400'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;