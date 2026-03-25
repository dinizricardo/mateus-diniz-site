'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Trophy,
  Medal,
  Calendar,
  MapPin,
  Users,
  Target,
  TrendingUp,
  Instagram,
  Mail,
  Phone,
  ChevronUp,
  Menu,
  X,
  Award,
  Star,
  Zap,
  Clock,
  ExternalLink,
  Send,
  Quote,
  CheckCircle,
  DollarSign,
  Ruler,
  User,
  Activity,
  Eye,
  Heart,
  BarChart3
} from 'lucide-react'

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Conquistas', href: '#conquistas' },
    { label: 'Numeros', href: '#numeros' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Patrocinio', href: '#patrocinio' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled ? 'glass-premium shadow-premium-lg border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-500 shadow-glow-orange">
              MD
            </div>
            <span className="font-bold text-lg hidden sm:block tracking-wide">Mateus Diniz</span>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hover:text-[#f77f00] transition-all duration-300 rounded-xl hover:bg-[#f77f00]/10 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-gradient-to-r from-[#f77f00] via-amber-500 to-[#ffc107] hover:opacity-90 text-white font-semibold shadow-glow-orange hover:shadow-xl transition-all duration-500 tracking-wide"
              asChild
            >
              <a href="#contato">Contratar</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 hover:bg-[#f77f00]/10 rounded-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden glass-premium rounded-3xl mt-2 p-6 animate-slide-up border border-white/20">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium hover:text-[#f77f00] transition-all duration-300 rounded-xl hover:bg-[#f77f00]/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-4 bg-gradient-to-r from-[#f77f00] via-amber-500 to-[#ffc107] hover:opacity-90 text-white font-semibold shadow-glow-orange tracking-wide"
                asChild
              >
                <a href="#contato" onClick={() => setIsMobileMenuOpen(false)}>Contratar</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
      
      <div className="blur-spot-orange top-1/4 -left-32 opacity-60" />
      <div className="blur-spot-gold bottom-1/4 right-0 opacity-40" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-24 lg:py-40">
        <div className="max-w-3xl">
          <Badge className="mb-8 bg-gradient-to-r from-[#f77f00]/20 to-[#ffc107]/20 text-[#f77f00] border border-[#f77f00]/30 text-sm font-medium px-5 py-2 tracking-wider backdrop-blur-sm">
            <Zap className="w-4 h-4 mr-2" />
            Atleta Profissional
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight tracking-tight text-balance">
            Mateus <span className="text-gradient-animated">Diniz</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-light tracking-wide">
            Beach Tennis Profissional
          </p>
          
          <p className="text-lg text-white/70 mb-10 max-w-xl leading-relaxed font-light">
            Representando Santa Catarina e o Brasil nas principais arenas mundiais de Beach Tennis. 
            Multiplos titulos estaduais e nacional, em busca da excelencia a cada ponto.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#f77f00] via-amber-500 to-[#ffc107] hover:opacity-90 text-white font-semibold shadow-glow-orange text-lg px-10 py-7 tracking-wide shine-effect transition-all duration-500 hover:scale-[1.02]"
              asChild
            >
              <a href="#patrocinio">
                <Target className="w-5 h-5 mr-2" />
                Seja um Patrocinador
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-xl text-lg px-10 py-7 tracking-wide transition-all duration-500 hover:scale-[1.02]"
              asChild
            >
              <a href="#conquistas">
                <Trophy className="w-5 h-5 mr-2" />
                Ver Conquistas
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-10">
            <div className="text-center group">
              <p className="text-4xl lg:text-5xl font-bold text-white text-shadow-premium group-hover:text-gradient-animated transition-all duration-500">23+</p>
              <p className="text-sm text-white/60 tracking-wider mt-1 font-light">Titulos</p>
            </div>
            <div className="divider-vertical h-16 hidden sm:block" />
            <div className="text-center group">
              <p className="text-4xl lg:text-5xl font-bold text-white text-shadow-premium">5</p>
              <p className="text-sm text-white/60 tracking-wider mt-1 font-light">Anos de Carreira</p>
            </div>
            <div className="divider-vertical h-16 hidden sm:block" />
            <div className="text-center group">
              <p className="text-4xl lg:text-5xl font-bold text-white text-shadow-premium">12</p>
              <p className="text-sm text-white/60 tracking-wider mt-1 font-light">Estados Disputados</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-indicator" />
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-radial-glow opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium-lg bg-gradient-to-br from-[#f77f00]/20 to-[#ffc107]/20 aspect-[4/5] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center mx-auto mb-6 shadow-glow-orange">
                  <span className="text-5xl font-bold text-white">MD</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mateus Diniz</h3>
                <p className="text-muted-foreground">Atleta Profissional</p>
              </div>
            </div>
            
            <Card className="absolute -bottom-6 -right-6 lg:right-12 shadow-premium-lg glass-premium p-5 z-20 rounded-2xl border border-white/20 hover-lift">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center shadow-glow-orange">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-lg tracking-wide">Campeao</p>
                  <p className="text-sm text-muted-foreground font-light">Catarinense 2024</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
              Sobre o Atleta
            </Badge>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
              A Paixao que move<br />
              <span className="text-gradient-animated">minha trajetoria</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed font-light">
              <p>
                Nascido e criado em Santa Catarina, descobri no Beach Tennis nao apenas um esporte, 
                mas uma verdadeira paixao que transformou minha vida. Desde o primeiro contato com 
                a raquete nas areias catarinenses, dediquei-me intensamente ao aprimoramento tecnico 
                e fisico, buscando sempre a excelencia em cada treino e competicao.
              </p>
              <p>
                Minha jornada como atleta profissional e marcada por dedicacao incansavel, 
                disciplina rigorosa e um compromisso inabalavel com a evolucao constante. 
                Represento com orgulho o estado de Santa Catarina e o Brasil nas principais 
                competicoes nacionais e internacionais.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              <Card className="p-5 border-l-4 border-l-[#f77f00] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#f77f00]" />
                  <div>
                    <p className="font-semibold tracking-wide">Idade</p>
                    <p className="text-sm text-muted-foreground font-light">24 anos</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-l-4 border-l-[#ffc107] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Ruler className="w-5 h-5 text-[#ffc107]" />
                  <div>
                    <p className="font-semibold tracking-wide">Altura</p>
                    <p className="text-sm text-muted-foreground font-light">1,82 m</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-l-4 border-l-[#f77f00] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#f77f00]" />
                  <div>
                    <p className="font-semibold tracking-wide">Cidade</p>
                    <p className="text-sm text-muted-foreground font-light">Florianopolis, SC</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-l-4 border-l-[#ffc107] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#ffc107]" />
                  <div>
                    <p className="font-semibold tracking-wide">Dominancia</p>
                    <p className="text-sm text-muted-foreground font-light">Destro</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-l-4 border-l-[#f77f00] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#f77f00]" />
                  <div>
                    <p className="font-semibold tracking-wide">Categoria</p>
                    <p className="text-sm text-muted-foreground font-light">Masculino A / Open</p>
                  </div>
                </div>
              </Card>
              <Card className="p-5 border-l-4 border-l-[#ffc107] hover-lift card-inner-shadow rounded-2xl bg-white/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#ffc107]" />
                  <div>
                    <p className="font-semibold tracking-wide">Estado</p>
                    <p className="text-sm text-muted-foreground font-light">Santa Catarina</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Achievements Section
function AchievementsSection() {
  const achievements = [
    { year: '2024', title: 'Campeao Catarinense', category: 'Dupla Masculina', icon: Trophy, highlight: true },
    { year: '2024', title: 'Vice-Campeao Brasileiro', category: 'Etapa Santa Catarina', icon: Medal, highlight: true },
    { year: '2023', title: 'Campeao Aberto de Floripa', category: 'Categoria A', icon: Trophy, highlight: false },
    { year: '2023', title: '3 Lugar Ranking Nacional', category: 'Circuito Sul Brasileiro', icon: Award, highlight: true },
    { year: '2022', title: 'Campeao Jogos Abertos', category: 'Representando Santa Catarina', icon: Trophy, highlight: false },
    { year: '2022', title: 'Semifinalista Copa Brasil', category: 'Dupla Mista', icon: Star, highlight: false },
  ]

  return (
    <section id="conquistas" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#ffc107]/10 to-[#f77f00]/10 text-[#ffc107] border border-[#ffc107]/20 px-4 py-1.5 tracking-wider">
            Conquistas
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Titulos que marcam<br />
            <span className="text-gradient-animated">minha trajetoria</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Uma historia construida com dedicacao, esforco e muitas horas de treino.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transition-all duration-500 hover-lift rounded-3xl ${
                achievement.highlight ? 'border-[#f77f00]/30 bg-gradient-to-br from-[#f77f00]/5 via-transparent to-[#ffc107]/5 shadow-glow-orange' : 'border-white/50'
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                    achievement.highlight 
                      ? 'bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] shadow-glow-orange' 
                      : 'bg-muted'
                  }`}>
                    <achievement.icon className={`w-7 h-7 ${achievement.highlight ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <Badge variant="outline" className="text-sm tracking-wider border-white/30">
                    {achievement.year}
                  </Badge>
                </div>
                <h3 className="font-bold text-xl mb-3 tracking-wide">{achievement.title}</h3>
                <p className="text-muted-foreground font-light">{achievement.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Play Style Section
function PlayStyleSection() {
  const playStyles = [
    { title: 'Potencia no Smash', score: 95, description: 'Golpes decisivos com forca e precisao' },
    { title: 'Mobilidade & Cobertura', score: 90, description: 'Agilidade para cobrir toda a quadra' },
    { title: 'Leitura de Jogo', score: 92, description: 'Antecipacao das jogadas adversarias' },
    { title: 'Mentalidade Competitiva', score: 97, description: 'Foco nos momentos decisivos' },
  ]

  return (
    <section id="estilo" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
            Estilo de Jogo
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Caracteristicas<br />
            <span className="text-gradient-animated">tecnicas</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {playStyles.map((style, index) => (
            <Card key={index} className="p-8 hover-lift transition-all duration-500 group rounded-3xl border border-white/20 shadow-premium">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow-orange">
                    <span className="text-3xl font-bold text-white">{style.score}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-3 tracking-wide">{style.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{style.description}</p>
                </div>
                <Progress value={style.score} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  const stats = [
    { label: 'Titulos Conquistados', value: 23, suffix: '+', icon: Trophy },
    { label: 'Podios no Total', value: 47, suffix: '+', icon: Medal },
    { label: 'Taxa de Vitoria', value: 78, suffix: '%', icon: TrendingUp },
    { label: 'Torneios por Ano', value: 38, suffix: '+', icon: Target },
    { label: 'Seguidores Digitais', value: 15, suffix: 'k', icon: Users },
    { label: 'Estados Competidos', value: 12, suffix: '', icon: MapPin },
  ]

  return (
    <section id="numeros" className="py-24 lg:py-36 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
            Numeros
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Estatisticas que<br />
            <span className="text-gradient-animated">contam minha historia</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden group hover-lift transition-all duration-500 rounded-3xl border border-white/20 shadow-premium">
              <CardContent className="p-8 text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-glow-orange">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-5xl lg:text-6xl font-bold mb-3 text-shadow-premium">
                  {stat.value}<span className="text-[#f77f00]">{stat.suffix}</span>
                </p>
                <p className="font-semibold mb-2 tracking-wide">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Schedule Section
function ScheduleSection() {
  const upcomingEvents = [
    { month: 'ABR', day: '12-14', title: 'Copa Brasil de Beach Tennis', location: 'Rio de Janeiro, RJ', category: 'Nacional', status: 'Confirmado', prize: 'R$ 50.000' },
    { month: 'MAI', day: '03-05', title: 'Circuito Catarinense - Etapa 1', location: 'Balneario Camboriu, SC', category: 'Estadual', status: 'Confirmado', prize: 'R$ 15.000' },
    { month: 'MAI', day: '24-26', title: 'Aberto Sul-Americano', location: 'Montevideu, Uruguai', category: 'Internacional', status: 'Confirmado', prize: 'USD 10.000' },
    { month: 'JUN', day: '14-16', title: 'Campeonato Brasileiro', location: 'Sao Paulo, SP', category: 'Nacional', status: 'Pendente', prize: 'R$ 80.000' },
  ]

  return (
    <section id="agenda" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
            Agenda
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Proximos<br />
            <span className="text-gradient-animated">compromissos</span>
          </h2>
        </div>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="group hover-lift transition-all duration-500 rounded-3xl border border-white/20 shadow-premium overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex md:flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] text-white rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none min-w-[120px] shadow-glow-orange">
                    <span className="text-sm font-medium tracking-wider">{event.month}</span>
                    <span className="text-3xl font-bold tracking-wide">{event.day}</span>
                  </div>
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl mb-3 group-hover:text-[#f77f00] transition-colors duration-300 tracking-wide">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-5 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-light">{event.location}</span>
                          </span>
                          <Badge variant="outline" className="border-white/30 tracking-wider">{event.category}</Badge>
                          <span className="flex items-center gap-2 text-[#ffc107]">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-medium">{event.prize}</span>
                          </span>
                        </div>
                      </div>
                      <Badge className={event.status === 'Confirmado' ? 'bg-green-500/10 text-green-600 border-green-500/20' : 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'}>
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sponsorship Section
function SponsorshipSection() {
  const packages = [
    {
      name: 'Bronze',
      price: 'R$ 500',
      period: '/mes',
      features: ['Logo no site oficial', 'Mencao em redes sociais (1x/mes)', 'Aparencia em eventos locais'],
      highlight: false
    },
    {
      name: 'Prata',
      price: 'R$ 1.500',
      period: '/mes',
      features: ['Logo destacado no site', 'Mencao em redes sociais (4x/mes)', 'Aparencia em eventos estaduais', 'Conteudo exclusivo para redes'],
      highlight: false
    },
    {
      name: 'Ouro',
      price: 'R$ 3.500',
      period: '/mes',
      features: ['Logo principal no site e equipamento', 'Mencao semanal em redes sociais', 'Aparencia em eventos nacionais', 'Conteudo exclusivo premium', 'Relatorio mensal de resultados', 'Acao de marketing personalizada'],
      highlight: true
    },
  ]

  return (
    <section id="patrocinio" className="py-24 lg:py-36 bg-muted/30 relative overflow-hidden">
      <div className="blur-spot-gold -top-20 right-0 opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
            Patrocinio
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Seja um<br />
            <span className="text-gradient-animated">patrocinador</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Invista no esporte e associe sua marca aos valores de determinacao, superacao e excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative overflow-hidden transition-all duration-500 hover-lift rounded-3xl ${
              pkg.highlight ? 'border-[#f77f00]/50 bg-gradient-to-br from-[#f77f00]/5 via-transparent to-[#ffc107]/5 shadow-glow-orange scale-105' : 'border-white/20'
            }`}>
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#f77f00] to-[#ffc107] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  RECOMENDADO
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-2 tracking-wide">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gradient-animated">{pkg.price}</span>
                  <span className="text-muted-foreground font-light">{pkg.period}</span>
                </div>
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#f77f00] shrink-0 mt-0.5" />
                      <span className="text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full ${pkg.highlight ? 'bg-gradient-to-r from-[#f77f00] via-amber-500 to-[#ffc107] hover:opacity-90 text-white shadow-glow-orange' : 'bg-muted hover:bg-muted/80'}`} asChild>
                  <a href="#contato">Tenho Interesse</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contato" className="py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-[#f77f00]/10 to-[#ffc107]/10 text-[#f77f00] border border-[#f77f00]/20 px-4 py-1.5 tracking-wider">
            Contato
          </Badge>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 tracking-tight text-balance">
            Entre em<br />
            <span className="text-gradient-animated">contato</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-wide">Informacoes</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f77f00] to-[#ffc107] flex items-center justify-center shadow-glow-orange">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground font-light">contato@mateusdiniz.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f77f00] to-[#ffc107] flex items-center justify-center shadow-glow-orange">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-muted-foreground font-light">(48) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f77f00] to-[#ffc107] flex items-center justify-center shadow-glow-orange">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <p className="text-muted-foreground font-light">@mateusdiniz.bt</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#f77f00] to-[#ffc107] flex items-center justify-center shadow-glow-orange">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Localizacao</p>
                  <p className="text-muted-foreground font-light">Florianopolis, Santa Catarina</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-premium-lg rounded-3xl border border-white/20">
            <h3 className="text-xl font-bold mb-6 tracking-wide">Envie uma mensagem</h3>
            <form className="space-y-5">
              <div>
                <Input placeholder="Seu nome" className="rounded-xl" />
              </div>
              <div>
                <Input type="email" placeholder="Seu email" className="rounded-xl" />
              </div>
              <div>
                <Input placeholder="Assunto" className="rounded-xl" />
              </div>
              <div>
                <Textarea placeholder="Sua mensagem" rows={4} className="rounded-xl" />
              </div>
              <Button className="w-full bg-gradient-to-r from-[#f77f00] via-amber-500 to-[#ffc107] hover:opacity-90 text-white font-semibold shadow-glow-orange">
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f77f00] via-amber-500 to-[#ffc107] flex items-center justify-center font-bold text-white shadow-glow-orange">
              MD
            </div>
            <span className="font-bold text-lg">Mateus Diniz</span>
          </div>
          <p className="text-sm text-muted-foreground font-light">
            © 2025 Mateus Diniz. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/mateusdiniz.bt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-[#f77f00]/10 hover:text-[#f77f00] transition-all duration-300">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Back to Top Button
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#f77f00] to-[#ffc107] text-white shadow-glow-orange flex items-center justify-center transition-all duration-500 hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <PlayStyleSection />
      <StatsSection />
      <ScheduleSection />
      <SponsorshipSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
