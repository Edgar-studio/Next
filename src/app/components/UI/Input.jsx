import React from 'react';

const Input = ({ register, error, className = '', ...props }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <input
                {...register}
                className={`w-3/5 h-8 mx-auto mt-4 p-3 border-none outline-none rounded-md block text-white 
          bg-gradient-to-r from-[#7d20f7] via-[#3958e3] to-[#3f0096] ${className}`}
                {...props}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
            )}
        </div>
    );
};

export default Input;
