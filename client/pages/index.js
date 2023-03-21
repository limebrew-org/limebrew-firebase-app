import Head from "next/head"
// import { UserGroupIcon } from "@heroicons/react/24/solid";
// import { UserGroupIcon } from "@heroicons/react/23"
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <div className="container" style={{ marginTop: "2vh" }}>
				<div className="border-l-4 border-indigo-500 p-4 rounded-md bg-indigo-100">
					<div className="flex items-center space-x-4">
						<div className="">
							<InformationCircleIcon className="h-6 w-6 text-indigo-600" />
						</div>
						<div className="">
							<p className="text-sm font-medium text-indigo-600">
								This is some informational text that you can use
								to show some informational content
							</p>
						</div>
						<div>
							<XMarkIcon className="h-6 w-6 text-indigo-600 cursor-pointer" />
						</div>
					</div>
				</div>
			</div> */}

			<div
				className="container py-12 mx-auto"
				style={{ marginTop: "2vh" }}
			>
				<div className="relative h-80 flex items-center">
					<div className="bg-black rounded-xl opacity-30 w-full h-full absolute" />
					<img
						src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
						alt="Team"
						className="h-full w-full object-cover rounded-md absolute inset-0"
					/>
					<div className="px-6 lg:px-8 z-10 mt-8">
						<div>
							<div className="mx-auto max-w-4xl">
								<div className="p-2 bg-indigo-600 rounded-md inline-block">
									<span>
										{/* <UserGroupIcon className="h-6 w-6 text-white" /> */}
									</span>
								</div>
								<h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
									Loved by over 5 new customers every minute
								</h2>
								<p className="mt-3 text-xl text-white sm:mt-4">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Repellendus repellat
									laudantium.
								</p>
							</div>
						</div>
						<dl className="flex space-x-2">
							<div className="flex flex-col p-6 pl-0 text-center">
								<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
									Free
								</dt>
								<dd className="order-1 text-3xl font-bold tracking-tight text-white">
									100%
								</dd>
							</div>
							<div className="flex flex-col p-6 text-center">
								<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
									Components
								</dt>
								<dd className="order-1 text-3xl font-bold tracking-tight text-white">
									100+
								</dd>
							</div>
							<div className="flex flex-col p-6 text-center">
								<dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-200">
									Users
								</dt>
								<dd className="order-1 text-3xl font-bold tracking-tight text-white">
									5k
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>

			<section
				className="container px-10 md:px-0 py-10 mx-auto"
				style={{ marginTop: "10vh" }}
			>
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-2xl mx-auto text-center">
						<h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
							Get latest update from our top creators
						</h2>
						<p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-200">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Pariatur nesciunt eos facilis debitis voluptas
							iure consectetur odit fugit voluptate recusandae?
						</p>
					</div>

					<form
						action="#"
						method="POST"
						className="max-w-xl mx-auto mt-12"
					>
						<div className="flex flex-col items-center sm:flex-row sm:justify-center">
							<div className="flex w-full max-w-sm items-center space-x-2">
								<input
									className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
									type="email"
									placeholder="Email"
								/>
								<button className="active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:ring-offset-1 dark:hover:bg-indigo-700 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-indigo-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 bg-indigo-600 dark:bg-indigo-600 text-white hover:bg-indigo-700 h-10 py-2 px-4">
									Subscribe
								</button>
							</div>
						</div>
					</form>

					<div className="flex items-center justify-center px-8 mt-8 sm:px-0">
						<svg
							className="flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-300"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
							/>
						</svg>
						<span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
							{" "}
							Your data is complely secured with us. We don&apos;t
							share with anyone.{" "}
						</span>
					</div>
				</div>
			</section>
			<section
				className="container px-10 md:px-0 mx-auto py-10"
				style={{ marginTop: "10vh" }}
			>
				<div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-2xl mx-auto text-center">
						<div className="isolate flex justify-center -space-x-2">
							<img
								className="relative z-30 inline-block h-14 w-14 rounded-full ring-4 ring-white dark:ring-[#111111]"
								src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
								alt="Dan_Abromov"
							/>
							<img
								className="relative z-20 inline-block h-14 w-14 rounded-full ring-4 ring-white dark:ring-[#111111]"
								src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
								alt="Guillermo_Rauch"
							/>
							<img
								className="relative z-10 inline-block h-14 w-14 rounded-full ring-4 ring-white dark:ring-[#111111]"
								src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
								alt="Lee_Robinson"
							/>
							<img
								className="relative z-0 inline-block h-14 w-14 rounded-full ring-4 ring-white dark:ring-[#111111]"
								src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
								alt="Delba"
							/>
						</div>

						<h2 className="mt-8 text-3xl font-bold leading-tight text-black dark:text-white lg:mt-12 sm:text-4xl lg:text-5xl">
							Join{" "}
							<span className="border-b-8 border-yellow-300">
								5,482
							</span>{" "}
							other developers
						</h2>
						<p className="max-w-xl mx-auto mt-6 text-xl text-gray-600 dark:text-gray-200 md:mt-10">
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis.
						</p>

						<a
							href="#"
							title=""
							className="inline-flex items-center justify-center px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md lg:mt-12 hover:bg-indigo-700 focus:bg-indigo-700"
							role="button"
						>
							Explore Courses
						</a>
					</div>
				</div>
			</section>
			<section
				className="lg:py-12 lg:flex lg:justify-center"
				style={{ marginTop: "30vh" }}
			>
				<div className="overflow-hidden lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
					<div className="lg:w-1/2">
						<div className="h-64 bg-cover lg:h-full">
							<img
								className="object-cover w-full h-full"
								src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
								alt=""
							/>
						</div>
					</div>

					<div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
							Build Your New{" "}
							<span className="text-indigo-600">Idea</span>
						</h2>

						<p className="mt-4 text-gray-500 dark:text-gray-300">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quidem modi reprehenderit vitae exercitationem
							aliquid dolores ullam temporibus enim expedita
							aperiam mollitia iure consectetur dicta tenetur,
							porro consequuntur saepe accusantium consequatur.
						</p>

						<div className="inline-flex w-full mt-6 sm:w-auto">
							<button className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
								Get started
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-4 h-4 ml-2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
