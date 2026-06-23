"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User, Calendar, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import YafmLogo from "@/public/yafm-logo.png"
import { registerAction } from "./actions"

type Tab = "login" | "register"

interface FormState {
    name: string
    email: string
    password: string
    confirmPassword: string
    birthday: string
}

interface FieldError {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
    birthday?: string
    general?: string
}

export default function AccessPage() {
    const [tab, setTab] = useState<Tab>("login")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [registered, setRegistered] = useState(false)
    const [errors, setErrors] = useState<FieldError>({})
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        birthday: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }))
    }

    const validateLogin = (): boolean => {
        const newErrors: FieldError = {}
        if (!form.email) newErrors.email = "E-mail é obrigatório."
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "E-mail inválido."
        if (!form.password) newErrors.password = "Senha é obrigatória."
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const validateRegister = (): boolean => {
        const newErrors: FieldError = {}
        if (!form.name || form.name.trim().length < 2) newErrors.name = "Nome deve ter ao menos 2 caracteres."
        if (!form.email) newErrors.email = "E-mail é obrigatório."
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "E-mail inválido."
        if (!form.password || form.password.length < 8) newErrors.password = "Senha deve ter ao menos 8 caracteres."
        if (form.password !== form.confirmPassword) newErrors.confirmPassword = "As senhas não coincidem."
        if (!form.birthday) newErrors.birthday = "Data de nascimento é obrigatória."
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const valid = tab === "login" ? validateLogin() : validateRegister()
        if (!valid) return

        setLoading(true)

        if (tab === "register") {
            const result = await registerAction({
                name: form.name,
                email: form.email,
                password: form.password,
                birthday: form.birthday,
            })

            if (result.success) {
                setRegistered(true)
            } else {
                setErrors((prev) => ({ ...prev, general: result.error }))
            }
        } else {
            // TODO: integrate login with Supabase Auth
            await new Promise((r) => setTimeout(r, 1000))
        }

        setLoading(false)
    }

    const switchTab = (t: Tab) => {
        setTab(t)
        setErrors({})
        setRegistered(false)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-tl from-slate-900 to-emerald-950 font-sans text-white px-4 py-12">
            {/* Radial glow */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 80%)",
                }}
            />

            <div className="relative z-10 w-full max-w-md">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 mb-8 w-fit mx-auto group">
                    <Image
                        src={YafmLogo}
                        alt="YAFM Logo"
                        width={44}
                        height={44}
                        className="transition-transform group-hover:scale-105"
                    />
                    <span className="flex flex-col">
                        <h1 className="text-2xl font-bold leading-none">YAFM</h1>
                        <p className="text-xs text-slate-400 leading-none mt-0.5">Yet Another Financial Manager</p>
                    </span>
                </Link>

                {/* Card */}
                <div
                    className="rounded-2xl p-8 shadow-2xl border border-white/10"
                    style={{
                        background: "rgba(15, 23, 42, 0.75)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                    }}
                >
                    {/* Tabs */}
                    <div className="flex rounded-xl bg-slate-800/60 p-1 mb-8 gap-1">
                        {(["login", "register"] as Tab[]).map((t) => (
                            <button
                                key={t}
                                type="button"
                                onClick={() => switchTab(t)}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    tab === t
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/50"
                                        : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {t === "login" ? "Entrar" : "Registrar-se"}
                            </button>
                        ))}
                    </div>

                    {/* Heading */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold">
                            {tab === "login" ? "Bem-vindo de volta" : "Crie sua conta"}
                        </h2>
                        <p className="text-sm text-slate-400 mt-1">
                            {tab === "login"
                                ? "Entre na sua conta para continuar."
                                : "Comece a gerenciar suas finanças hoje."}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                        {/* Name — register only */}
                        {tab === "register" && (
                            <Field
                                id="name"
                                name="name"
                                label="Nome completo"
                                type="text"
                                placeholder="Seu nome"
                                value={form.name}
                                error={errors.name}
                                onChange={handleChange}
                                icon={<User size={16} className="text-slate-400" />}
                                autoComplete="name"
                            />
                        )}

                        {/* Email */}
                        <Field
                            id="email"
                            name="email"
                            label="E-mail"
                            type="email"
                            placeholder="seu@email.com"
                            value={form.email}
                            error={errors.email}
                            onChange={handleChange}
                            icon={<Mail size={16} className="text-slate-400" />}
                            autoComplete="email"
                        />

                        {/* Birthday — register only */}
                        {tab === "register" && (
                            <Field
                                id="birthday"
                                name="birthday"
                                label="Data de nascimento"
                                type="date"
                                placeholder=""
                                value={form.birthday}
                                error={errors.birthday}
                                onChange={handleChange}
                                icon={<Calendar size={16} className="text-slate-400" />}
                                autoComplete="bday"
                            />
                        )}

                        {/* Password */}
                        <PasswordField
                            id="password"
                            name="password"
                            label="Senha"
                            placeholder={tab === "register" ? "Mín. 8 caracteres" : "Sua senha"}
                            value={form.password}
                            error={errors.password}
                            onChange={handleChange}
                            show={showPassword}
                            onToggle={() => setShowPassword((v) => !v)}
                            autoComplete={tab === "login" ? "current-password" : "new-password"}
                        />

                        {/* Confirm password — register only */}
                        {tab === "register" && (
                            <PasswordField
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirmar senha"
                                placeholder="Repita a senha"
                                value={form.confirmPassword}
                                error={errors.confirmPassword}
                                onChange={handleChange}
                                show={showConfirmPassword}
                                onToggle={() => setShowConfirmPassword((v) => !v)}
                                autoComplete="new-password"
                            />
                        )}

                        {/* Forgot password */}
                        {tab === "login" && (
                            <div className="flex justify-end -mt-1">
                                <button
                                    type="button"
                                    className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                                >
                                    Esqueceu a senha?
                                </button>
                            </div>
                        )}

                        {/* General error */}
                        {errors.general && (
                            <p className="text-xs text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                                {errors.general}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-2 flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-900/40 hover:shadow-emerald-800/60"
                        >
                            {loading ? (
                                <Loader2 size={16} className="animate-spin" />
                            ) : (
                                <>
                                    {tab === "login" ? "Entrar" : "Criar conta"}
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Success banner — register */}
                    {registered && (
                        <div className="mt-4 flex items-start gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3 text-sm text-emerald-300">
                            <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                            <span>
                                Conta criada com sucesso!{" "}
                                <button
                                    type="button"
                                    onClick={() => switchTab("login")}
                                    className="underline underline-offset-2 hover:text-emerald-200 transition-colors cursor-pointer font-medium"
                                >
                                    Entrar agora
                                </button>
                            </span>
                        </div>
                    )}

                    {/* Footer */}
                    <p className="text-center text-xs text-slate-500 mt-6">
                        {tab === "login" ? "Ainda não tem conta? " : "Já tem uma conta? "}
                        <button
                            type="button"
                            onClick={() => switchTab(tab === "login" ? "register" : "login")}
                            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
                        >
                            {tab === "login" ? "Registre-se" : "Entrar"}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

interface FieldProps {
    id: string
    name: string
    label: string
    type: string
    placeholder: string
    value: string
    error?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    icon: React.ReactNode
    autoComplete?: string
}

function Field({ id, name, label, type, placeholder, value, error, onChange, icon, autoComplete }: FieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium text-slate-300">
                {label}
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</span>
                <input
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-800/60 border text-sm text-white placeholder-slate-500 outline-none transition-all duration-200
            focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 scheme-dark
            ${error ? "border-red-500/70 bg-red-500/5" : "border-white/10 hover:border-white/20"}`}
                />
            </div>
            {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
        </div>
    )
}

interface PasswordFieldProps {
    id: string
    name: string
    label: string
    placeholder: string
    value: string
    error?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    show: boolean
    onToggle: () => void
    autoComplete?: string
}

function PasswordField({
    id,
    name,
    label,
    placeholder,
    value,
    error,
    onChange,
    show,
    onToggle,
    autoComplete,
}: PasswordFieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium text-slate-300">
                {label}
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Lock size={16} className="text-slate-400" />
                </span>
                <input
                    id={id}
                    name={name}
                    type={show ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    autoComplete={autoComplete}
                    className={`w-full pl-9 pr-10 py-2.5 rounded-xl bg-slate-800/60 border text-sm text-white placeholder-slate-500 outline-none transition-all duration-200
            focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500
            ${error ? "border-red-500/70 bg-red-500/5" : "border-white/10 hover:border-white/20"}`}
                />
                <button
                    type="button"
                    onClick={onToggle}
                    aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>
            {error && <p className="text-xs text-red-400 ml-1">{error}</p>}
        </div>
    )
}