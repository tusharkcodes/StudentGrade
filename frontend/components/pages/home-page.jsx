'use client'

export default function HomePage({ onNavigate }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-800">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1">
                <span className="text-sm font-semibold text-blue-400">AI-Powered Analytics</span>
              </div>
              <h1 className="section-title text-4xl sm:text-5xl lg:text-6xl">
                Predict Your<span className="text-blue-400 ml-3">Exam Score</span>
              </h1>
              <p className="section-subtitle text-lg">
                Discover personalized insights about your academic performance. Get actionable recommendations to boost your scores and reach your potential.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate('predict')}
                className="btn-primary text-base"
              >
                Start Prediction
              </button>
              <button
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-blue-400">12</p>
                <p className="text-sm text-slate-400">Input Factors</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-emerald-400">98%</p>
                <p className="text-sm text-slate-400">Accuracy</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-amber-400">5K+</p>
                <p className="text-sm text-slate-400">Predictions</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-80 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-800/10 p-8 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
            </div>
            <div className="relative z-10 text-center space-y-4">
              <div className="text-6xl">📈</div>
              <p className="text-2xl font-bold text-slate-50">Smart Predictions</p>
              <p className="text-slate-400">Powered by Machine Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="section-title text-3xl sm:text-4xl">Why Use EduPredict?</h2>
            <p className="section-subtitle text-lg">Everything you need to improve your academic performance</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🎯',
                title: 'Accurate Predictions',
                desc: 'AI model trained on thousands of student data points'
              },
              {
                icon: '💡',
                title: 'Smart Insights',
                desc: 'Identify your strengths and areas for improvement'
              },
              {
                icon: '📋',
                title: 'Personalized Plans',
                desc: 'Get tailored recommendations for your success'
              },
              {
                icon: '⚡',
                title: 'Real-time Analysis',
                desc: 'Instant feedback on your study factors'
              },
              {
                icon: '📊',
                title: 'Progress Tracking',
                desc: 'Visualize your improvement over time'
              },
              {
                icon: '🔒',
                title: 'Privacy First',
                desc: 'Your data is secure and confidential'
              }
            ].map((feature, i) => (
              <div key={i} className="card space-y-3 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-50">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="section-title text-3xl sm:text-4xl">How It Works</h2>
            <p className="section-subtitle text-lg">Three simple steps to get your prediction</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { num: 1, title: 'Fill the Form', desc: 'Enter your study hours, attendance, resources, sleep, and more' },
              { num: 2, title: 'AI Analysis', desc: 'Our model processes your data and generates predictions' },
              { num: 3, title: 'Get Results', desc: 'Receive detailed insights and recommendations for improvement' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="card space-y-4 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 mx-auto">
                    <span className="text-2xl font-bold text-blue-400">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-50">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden sm:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 to-slate-800/10 p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">Ready to Boost Your Scores?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Start your journey to academic excellence today. Get accurate predictions and personalized recommendations.
          </p>
          <button
            onClick={() => onNavigate('predict')}
            className="btn-primary text-lg px-8 py-3 mx-auto block"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </main>
  )
}
