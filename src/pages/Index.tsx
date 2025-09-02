import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const equipmentItems = [
    {
      id: 1,
      name: "Токарный станок 1К62",
      category: "Металлообработка",
      year: 2018,
      condition: "Отличное",
      price: "850 000 ₽",
      specs: {
        "Диаметр обработки": "400 мм",
        "Длина обработки": "1000 мм",
        "Мощность": "7.5 кВт",
        "Вес": "2800 кг"
      },
      image: "/img/776595ba-c92b-40b0-b983-dd575da40492.jpg"
    },
    {
      id: 2,
      name: "Фрезерный станок 6Р13",
      category: "Металлообработка",
      year: 2019,
      condition: "Хорошее",
      price: "1 250 000 ₽",
      specs: {
        "Размер стола": "1600x400 мм",
        "Ход по осям": "X:1250, Y:400, Z:420",
        "Мощность шпинделя": "11 кВт",
        "Вес": "4200 кг"
      },
      image: "/img/df111a37-7b2f-40e8-9090-f03352b30577.jpg"
    },
    {
      id: 3,
      name: "Сварочный аппарат Lincoln",
      category: "Сварка",
      year: 2020,
      condition: "Отличное",
      price: "180 000 ₽",
      specs: {
        "Тип тока": "AC/DC",
        "Диапазон тока": "5-300 А",
        "Напряжение": "380 В",
        "Вес": "85 кг"
      },
      image: "/img/ba761c13-f100-48f5-b0a3-6df56203db84.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Factory" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ПромТехника</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-primary font-medium">Главная</a>
              <a href="#catalog" className="text-muted-foreground hover:text-primary font-medium">Каталог</a>
              <a href="#about" className="text-muted-foreground hover:text-primary font-medium">О компании</a>
              <a href="#contacts" className="text-muted-foreground hover:text-primary font-medium">Контакты</a>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Промышленное оборудование <span className="text-accent">б/у</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Проверенное промышленное оборудование с полными техническими паспортами. 
            Гарантия качества и профессиональная поддержка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3">
              <Icon name="Search" size={20} className="mr-2" />
              Найти оборудование
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="FileText" size={20} className="mr-2" />
              Каталог PDF
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">единиц в наличии</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15</div>
              <div className="text-muted-foreground">лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">проверка качества</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog */}
      <section id="catalog" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Каталог оборудования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждая единица оборудования проходит техническую диагностику и поставляется с паспортом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-accent">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {item.condition}
                  </Badge>
                  <Badge variant="outline" className="absolute top-4 right-4 bg-card">
                    {item.year} г.
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.category}</span>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary flex items-center">
                      <Icon name="Settings" size={16} className="mr-2" />
                      Технические характеристики
                    </h4>
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="FileDown" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="Grid3x3" size={20} className="mr-2" />
              Показать весь каталог
            </Button>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section id="about" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на продаже проверенного промышленного оборудования б/у. 
                Каждая единица техники проходит полную диагностику и поставляется с техническим паспортом.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary" />
                  <span>Техническая экспертиза каждой единицы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span>Гарантия на все оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Truck" size={20} className="text-primary" />
                  <span>Доставка по всей России</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Wrench" size={20} className="text-primary" />
                  <span>Сервисное обслуживание</span>
                </div>
              </div>

              <Button size="lg" className="mt-8">
                <Icon name="Users" size={20} className="mr-2" />
                Наша команда
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Icon name="Factory" size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">единиц в каталоге</div>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Users" size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="MapPin" size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">регионов доставки</div>
              </Card>
              <Card className="p-6 text-center">
                <Icon name="Award" size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-2xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для консультации по выбору оборудования
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <Icon name="Phone" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-2xl font-bold text-primary mb-2">+7 (495) 123-45-67</p>
              <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
            </Card>

            <Card className="p-8 text-center">
              <Icon name="Mail" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-xl text-primary mb-2">info@promtehnika.ru</p>
              <p className="text-muted-foreground">Ответим в течение часа</p>
            </Card>

            <Card className="p-8 text-center">
              <Icon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Адрес</h3>
              <p className="text-primary mb-2">г. Москва, ул. Промышленная, д. 15</p>
              <p className="text-muted-foreground">Склад и офис продаж</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-12">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Factory" size={32} />
                <span className="text-2xl font-bold">ПромТехника</span>
              </div>
              <p className="text-primary-foreground/80">
                Надежный партнер в выборе промышленного оборудования
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Металлообработка</li>
                <li>Сварочное оборудование</li>
                <li>Подъемные механизмы</li>
                <li>Компрессоры</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Техническая экспертиза</li>
                <li>Доставка</li>
                <li>Монтаж</li>
                <li>Сервис</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div>+7 (495) 123-45-67</div>
                <div>info@promtehnika.ru</div>
                <div>г. Москва, ул. Промышленная, 15</div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80">
              © 2024 ПромТехника. Все права защищены.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;