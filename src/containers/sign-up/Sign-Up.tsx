import pageBg from '../../assets/finger-auth.jpg'
import { Link } from "react-router-dom";

const SignUpContainer = () => {

    return (
        <div className='text-white font-rubik flex-1 min-h-screen grid gap-3 grid-cols-1 md:grid-cols-3'>

            <div className="rounded-xl hidden md:block absolute">
                <img src={pageBg} alt="page" className="opacity-30 max-h-screen" />
            </div>

            <div className="rounded-xl hidden md:block" />

            <div className="m-5 md:col-span-2 ring-1 ring-slate-500/30 rounded-xl mx-auto w-96 p-5 grid gap-2 bg-gradient-to-tr from-blue-900/10 to-slate-600/10 backdrop-blur-sm">
                <div>
                    <div className='text-center grid gap-2 pt-5'>
                        <h2 className="text-4xl font-bold">Create Account</h2>
                        <p className="text-xs">Please fill your information below.</p>
                    </div>
                </div>
                <div>
                    <form className="grid gap-5">
                        <div className="my-2 relative">
                            <label htmlFor="fname" className="block text-sm font-medium my-1">
                                Firstname
                            </label>
                            <input
                                type="text"
                                id="fname"
                                className="w-full px-3 py-2 bg-transparent text-xs border-b-2 border-slate-50/30 focus:border-slate-50/80 outline-none transition-all duration-300"
                                placeholder="Enter your firstname"
                                required
                            />
                        </div>
                        <div className="my-2 relative">
                            <label htmlFor="lname" className="block text-sm font-medium my-1">
                                Lastname
                            </label>
                            <input
                                type="text"
                                id="lname"
                                className="w-full px-3 py-2 bg-transparent text-xs border-b-2 border-slate-50/30 focus:border-slate-50/80 outline-none transition-all duration-300"
                                placeholder="Enter your lastname"
                                required
                            />
                        </div>
                        <div className="my-2 relative">
                            <label htmlFor="email" className="block text-sm font-medium my-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 bg-transparent text-xs border-b-2 border-slate-50/30 focus:border-slate-50/80 outline-none transition-all duration-300"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="my-2 relative">
                            <label htmlFor="password" className="block text-sm font-medium my-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 bg-transparent text-xs border-b-2 border-slate-50/30 focus:border-slate-50/80 outline-none transition-all duration-300"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <div className="my-2 relative">
                            <label htmlFor="cpassword" className="block text-sm font-medium my-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="cpassword"
                                className="w-full px-3 py-2 bg-transparent text-xs border-b-2 border-slate-50/30 focus:border-slate-50/80 outline-none transition-all duration-300"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="my-2 w-full rounded-md px-3 py-2 bg-gradient-to-tr from-blue-900/10 to-slate-600/10 hover:bg-gradient-to-bl hover:from-blue-900/20 hover:to-slate-600/20 duration-300"
                        >
                            Continue
                        </button>
                    </form>
                </div>
                <div className="text-xs mx-auto text-slate-50/60 flex gap-1">
                    Already have an account? <Link className="text-slate-50/75 hover:text-slate-50/90 hover:underline duration-300" to='/sign-in' target="_top">Log in</Link> to one!
                </div>
            </div>
        </div>
    )
}

export default SignUpContainer;
