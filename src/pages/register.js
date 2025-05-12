import { useState } from 'react';

export async function getServerSideProps() {
    return {
        props: {},
    };
}

export default function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        referral: '',
        marketing: false,
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required.";
        if (!formData.lastName) newErrors.lastName = "Last Name is required.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Valid Email is required.";
        if (!formData.phone || !/^\d+$/.test(formData.phone)) newErrors.phone = "Valid Phone number is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form Data:', formData);
        }
    };

    return (
        <div className="relative w-full">
            <button
                type="button"
                onClick={() => window.history.back()}
                className="absolute left-0 top-0 p-3 text-gray-400 hover:text-white"
            >
                ←
            </button>
            <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto bg-black text-white">
                <h1 className="text-3xl font-semibold mb-8 pt-12 text-center">FORMATION</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <p className="text-sm text-gray-400 mb-6 text-left ml-3">
                        <strong>Pleasure to meet you.</strong><br />
                        <strong>Allow us to get to know you better.</strong>
                    </p>
                    <div className="flex gap-3">
                        <div className="w-full">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.firstName ? 'border-red-500' : 'border-gray-600'} ${formData.firstName ? 'text-white' : 'text-gray-400'}`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                        </div>
                        <div className="w-full">
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.lastName ? 'border-red-500' : 'border-gray-600'} ${formData.lastName ? 'text-white' : 'text-gray-400'}`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className="w-full">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} ${formData.email ? 'text-white' : 'text-gray-400'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="flex gap-3">
                        <select
                            name="phoneCode"
                            value={formData.phoneCode}
                            onChange={handleChange}
                            required
                            className="border-b p-3 focus:outline-none focus:ring-2 border-gray-600 text-white"
                        >
                            <option value="+971">+971</option>
                            <option value="+1">+1</option>
                            <option value="+1849">+1849</option>
                        </select>
                        <div className="w-full">
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500' : 'border-gray-600'} ${formData.phone ? 'text-white' : 'text-gray-400'}`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="relative w-full">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500' : 'border-gray-600'} ${formData.password ? 'text-white' : 'text-gray-400'}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-gray-400"
                            >
                                {showPassword ? "🔓" : "🔒"}
                            </button>
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <div className="relative w-full">
                            <input
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className={`border-b p-3 w-full focus:outline-none focus:ring-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-600'} ${formData.confirmPassword ? 'text-white' : 'text-gray-400'}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-gray-400"
                            >
                                {showConfirmPassword ? "🔓" : "🔒"}
                            </button>
                            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                        </div>
                    </div>
                    <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleChange}
                        required
                        className="border-b p-3 w-full focus:outline-none focus:ring-2 border-gray-600 text-white"
                    >
                        <option value="">How did you hear about us?</option>
                        <option value="Referral">Referral</option>
                        <option value="Chidesk">Chidesk</option>
                        <option value="Google">Google</option>
                        <option value="Events">Events</option>
                        <option value="Instagram">Instagram</option>
                    </select>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="marketing"
                            checked={formData.marketing}
                            onChange={handleChange}
                            className="h-4 w-4 border border-gray-600 bg-black text-white focus:ring-2 focus:ring-gray-500"
                        />
                        <label className="text-sm text-gray-400">Receive marketing messages</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                            className="h-4 w-4 border border-gray-600 bg-black text-white focus:ring-2 focus:ring-gray-500"
                        />
                        <label className="text-sm text-gray-400">
                            I agree to Formation&#39;s <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.password || !formData.terms}
                        className={`p-3 rounded w-full ${!formData.terms ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white font-semibold`}
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}