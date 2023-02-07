import * as React from "react"
import Skills from "./skills"
import Divider from "./divider"
import AboutDetail from "./aboutDetail"

const languages = ['javascript', 'python', 'c# (Unity)']
const tools = ['vue', 'node',  'express', 'django', 'nginx', 'unity', 'docker']
const test = ['jest', 'gherkin',  'cypress']
const general = ['web', 'animation',  'games']

const details = [languages, tools, test, general]


const About = () => {
  return (
  		<section>
				<div className="about-detail panel1">

					<a href="https://github.com/k-flynn-webdev"
						 className="link"
						 aria-label="Github"
						 title="Github"
						 target="_blank"
						 rel="noreferrer">
						<span>Github</span>
						<span>
							<svg width="100%"
									 height="100%"
									 viewBox="0 0 116 116"
							>
								<g>
									<path d="M80.541,120.974l-44.739,0l0,-4.978l7.378,0c0,0 0.273,-2.768 0.273,-4.293c0,-1.367 -0.049,-4.983 -0.078,-9.782c-15.999,3.475 -19.375,-7.711 -19.375,-7.711c-2.616,-6.646 -6.387,-8.415 -6.387,-8.415c-5.223,-3.566 0.395,-3.496 0.395,-3.496c5.773,0.406 8.81,5.929 8.81,5.929c5.131,8.789 13.464,6.25 16.741,4.777c0.523,-3.714 2.009,-6.25 3.651,-7.687c-12.772,-1.451 -26.201,-6.388 -26.201,-28.429c0,-6.278 2.243,-11.416 5.922,-15.434c-0.593,-1.455 -2.567,-7.306 0.565,-15.222c0,0 4.827,-1.547 15.816,5.896c4.587,-1.278 9.509,-1.913 14.4,-1.938c4.887,0.025 9.805,0.66 14.399,1.938c10.982,-7.443 15.802,-5.896 15.802,-5.896c3.139,7.916 1.165,13.767 0.576,15.222c3.686,4.018 5.911,9.156 5.911,15.434c0,22.098 -13.45,26.96 -26.261,28.383c2.062,1.776 3.902,5.286 3.902,10.65c0,7.691 -0.071,13.895 -0.071,15.781c0,1.539 0.17,4.293 0.17,4.293l8.401,0l0,4.978Z"/>
								</g>
							</svg>
						</span>
					</a>

					<a href="https://github.com/k-flynn-webdev"
						 className="link"
						 aria-label="Linkedin"
						 title="Linkedin"
						 target="_blank"
						 rel="noreferrer">
						<span>Linkedin</span>
						<span>
							<svg width="100%"
									 height="100%"
									 viewBox="0 0 116 116"
							>
								<path d="M39.608,91.735l-9.795,0l0,-43.617l9.795,0l0,43.617Zm-10.4,-54.944c0,-1.505 0.477,-2.755 1.431,-3.749c0.954,-0.994 2.318,-1.492 4.092,-1.492c1.773,0 3.144,0.498 4.111,1.492c0.968,0.994 1.452,2.244 1.452,3.749c0,1.478 -0.484,2.708 -1.452,3.688c-0.967,0.981 -2.338,1.472 -4.111,1.472c-1.774,0 -3.138,-0.491 -4.092,-1.472c-0.954,-0.98 -1.431,-2.21 -1.431,-3.688Z" ></path>
								<path d="M59.361,48.118l0.282,5.039c3.225,-3.896 7.457,-5.845 12.698,-5.845c9.083,0 13.706,5.2 13.867,15.601l0,28.822l-9.796,0l0,-28.258c0,-2.768 -0.598,-4.817 -1.793,-6.148c-1.196,-1.33 -3.151,-1.995 -5.866,-1.995c-3.95,0 -6.893,1.787 -8.828,5.361l0,31.04l-9.796,0l0,-43.617l9.232,0Z"></path>
							</svg>
						</span>
					</a>

					{/*CV: cv link*/}
					{/*GITHUB: giyhub link*/}



				</div>
			</section>
  )
}

export default About