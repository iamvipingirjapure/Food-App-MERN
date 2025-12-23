import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";
import { EyeOff, Loader2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { signupUser, clearError } from "../redux/authSlice";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, error, isAuthenticated } = useAppSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/verification");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    return () => {
      dispatch(clearError());
    };
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValidationError("");
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setValidationError("Password must be at least 6 characters");
      return;
    }

    dispatch(
      signupUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
    );
  };

  return (
    <AuthLayout title="Sign Up" subtitle="Please sign up to get started">
      <form onSubmit={handleSignup} className="space-y-4">
        {(error || validationError) && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error || validationError}
          </div>
        )}

        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="••••••••••"
          value={formData.password}
          onChange={handleChange}
          icon={<EyeOff className="w-5 h-5 text-gray-400" />}
          required
        />
        <Input
          label="Re-type Password"
          type="password"
          name="confirmPassword"
          placeholder="••••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          icon={<EyeOff className="w-5 h-5 text-gray-400" />}
          required
        />

        <div className="pt-4">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </span>
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </form>
      <div className="mt-8 text-center pb-8">
        <p className="text-gray-500 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-bold ml-1 uppercase"
          >
            Log In
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
