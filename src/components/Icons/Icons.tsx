import { SVGAttributes } from "react"

interface IconProps extends SVGAttributes<HTMLOrSVGElement> {}

export const FacebookIcon = (props: IconProps) => {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center rounded bg-facebook-primary py-[6px] hover:bg-facebook-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        className="fill-white"
        {...props}>
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    </a>
  )
}

export const GoogleIcon = (props: IconProps) => {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center rounded bg-google-primary py-[6px] hover:bg-google-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 48 48"
        className="fill-white"
        {...props}>
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </svg>
    </a>
  )
}

export const AppleIcon = (props: IconProps) => {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center rounded bg-apple-primary py-[6px] hover:bg-apple-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        className="fill-white"
        {...props}>
        <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
      </svg>
    </a>
  )
}

export const XboxIcon = (props: IconProps) => {
  return (
    <a
      href="#"
      className="flex w-full items-center justify-center rounded bg-xbox-primary py-[6px] hover:bg-xbox-hover">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        className="fill-white"
        {...props}>
        <path d="M 15 3 C 13.051 3 10.635984 3.6181719 8.8339844 4.7011719 C 8.7039844 4.7771719 8.3470625 5.0221406 8.1640625 5.2441406 L 8.1640625 5.2460938 C 9.8830625 3.3500938 14.893 7.3485937 15 7.4335938 L 15 7.4355469 C 15.107 7.3505469 20.116938 3.3520937 21.835938 5.2460938 C 21.651937 5.0240937 21.295063 4.780125 21.164062 4.703125 C 19.363063 3.622125 17.254953 3 15.001953 3 L 15 3 z M 7.4414062 6.1035156 C 7.0363594 6.1687656 6.5830625 6.4272031 6.1953125 6.8457031 C 4.2123125 8.9867031 3 11.850047 3 14.998047 C 3 18.106507 4.1826933 20.935533 6.1210938 23.066406 C 5.4850937 19.988406 6.0637812 17.819047 7.8007812 14.998047 C 9.5407813 12.174047 12.599609 8.9980469 12.599609 8.9980469 C 10.075609 6.6150469 8.2821719 6.1885156 7.8261719 6.1035156 C 7.7061719 6.0810156 7.5764219 6.0817656 7.4414062 6.1035156 z M 6.1210938 23.066406 C 6.1210938 23.066406 6.1210938 23.068359 6.1210938 23.068359 L 6.1210938 23.070312 C 8.3160938 25.482313 11.494953 27 15.001953 27 C 18.518953 27 21.684859 25.485219 23.880859 23.074219 L 23.880859 23.072266 C 25.818859 20.940266 27 18.109 27 15 C 27 11.852 25.788687 8.9896563 23.804688 6.8476562 C 23.287688 6.2896563 22.653828 6.0154687 22.173828 6.1054688 C 21.718828 6.1914688 19.924391 6.618 17.400391 9 C 17.400391 9 20.459219 12.176 22.199219 15 C 23.935219 17.822 24.514906 19.990359 23.878906 23.068359 C 23.872906 23.033359 23.629672 21.45375 22.013672 19.21875 C 20.750672 17.47575 17 13.300391 15 11.400391 C 13 13.300391 9.2493281 17.471797 7.9863281 19.216797 C 6.3703281 21.449797 6.1270937 23.030406 6.1210938 23.066406 z"></path>
      </svg>
    </a>
  )
}

export const RiotIcon = (props: IconProps) => {
  return (
    <svg
      version="1.1"
      baseProfile="full"
      xmlns="http://www.w3.org/2000/svg"
      fill="#D13639"
      viewBox="0 0 110 35"
      {...props}>
      <path
        d="M17.8 31.7l-1.6-4.1 15.4.8-.7 6.6zM21.5 0L0 10.2l3.3 15.3h4.4l-.7-11 .6-.2 2.7 11.2h4.5l-.1-13.4.6-.2 2.3 13.6h4.9l1.1-16.1.7-.3 1.2 16.4h6.3l2.3-22.4zm84.9 31.2l-6.1-1v-.8l5.9-.2-.1-1.5h-7.5l-.4 3.8 6.2 1.1v.7l-6.5.3-.2 1.4h9.1l-.4-3.8zM48 30.6l-.1 1.4 2.2.1v1.4l-4.7-.1.2-4.1 6.4-.1-.1-1.5h-8.3l-.7 7.3h9.4l-.2-4.5-4.1.1zm39.9 2.7V32l4.4-.1v-1.4l-4.5-.1v-1.3l5.9-.1v-1.5h-8l-.2 7.5h8.4l-.1-1.5-5.9-.2zM81.5 35l-.8-7.4h-2.1l-3.1 3.5-3.1-3.5h-2.1l-.7 7.4h2.5l.2-4.8 3.2 3.3 3.2-3.3.2 4.8zM70.9.5h-5l-.4 22.9h6zm20.4 0H75.7l-.6 22.9h17.3L91.3.5zm-4.8 17.9l-5.5.2-.3-13.5 5.8.2v13.1zM110 5.5l-.6-5H94l.2 4.4 4.9.2.5 18.3h6.1l-1.8-18.1zM56.1 23.4h6.6l-4.3-10.3 3.4-1.9L59.5.5H42.7l-.6 5 3.8-.1-1.8 18.1H50l.2-5.8 4.2-2.3 1.7 8zM50.5 5.1l4.8-.1.6 4.6-5.6 2.6.2-7.1zm13 29.9H66l-2-7.4h-6L56 35h2.5l.4-1.9 4.1.1.5 1.8zm-4.2-3.3l.5-2.4 2.4-.1.5 2.4-3.4.1z"
        fill="#D13639"></path>
    </svg>
  )
}
